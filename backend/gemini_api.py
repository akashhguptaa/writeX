import os
import re
import google.generativeai as genai
from pathlib import Path

# Initialize Gemini
GEMINI_API_KEY = "your-api-key-here"
genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel('gemini-pro')

def read_project_files(base_path='.', exclude_dirs=None):
    """Read all relevant project files into a dictionary"""
    if exclude_dirs is None:
        exclude_dirs = ['node_modules', '.git', '__pycache__', 'venv', 'dist', 'build']
    
    project_files = {}
    for root, dirs, files in os.walk(base_path):
        # Exclude directories
        dirs[:] = [d for d in dirs if d not in exclude_dirs]
        
        for file in files:
            if file.split('.')[-1].lower() in ['py', 'js', 'jsx', 'html', 'css', 'json', 'txt', 'md']:
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        project_files[file_path] = f.read()
                except Exception as e:
                    print(f"Error reading {file_path}: {e}")
    return project_files

def generate_context_prompt(files_dict, user_prompt):
    """Create a context-aware prompt for Gemini"""
    context = "Current Project Files:\n"
    for path, content in files_dict.items():
        context += f"\n=== FILE: {path} ===\n{content}\n"
    
    return f"""
    You are a senior full-stack developer assisting with Python and React projects. 
    The user wants to modify their codebase. Here's the current project structure and content:

    {context}

    User Request: {user_prompt}

    Provide your response in this EXACT format:
    [CREATE|EDIT|DELETE] "file_path"
    ```
    file_content
    ```
    Repeat this pattern for each file change needed. For deletions, content can be empty.
    """

def parse_gemini_response(response):
    """Parse Gemini's response into file operations"""
    pattern = r'(CREATE|EDIT|DELETE)\s+"(.+?)"\s*\n```(?:\w+\n)?([\s\S]*?)```'
    return re.findall(pattern, response)

def apply_changes(operations, base_dir='.'):
    """Execute the file operations"""
    for action, path, content in operations:
        full_path = os.path.join(base_dir, path)
        
        if action == 'DELETE':
            if os.path.exists(full_path):
                os.remove(full_path)
                print(f"Deleted {path}")
            continue
            
        # Create directory if needed
        os.makedirs(os.path.dirname(full_path), exist_ok=True)
        
        if action in ['CREATE', 'EDIT']:
            with open(full_path, 'w', encoding='utf-8') as f:
                f.write(content.strip())
            print(f"{'Created' if action == 'CREATE' else 'Updated'} {path}")

def code_assistant():
    base_dir = input("Enter project base directory (default: current): ") or '.'
    exclude_dirs = ['node_modules', '.git', '__pycache__']
    
    while True:
        user_prompt = input("\nEnter your request (or 'exit' to quit): ")
        if user_prompt.lower() == 'exit':
            break
        
        # Read current project state
        project_files = read_project_files(base_dir, exclude_dirs)
        
        # Generate and send prompt
        full_prompt = generate_context_prompt(project_files, user_prompt)
        response = model.generate_content(full_prompt)
        
        # Parse and apply changes
        operations = parse_gemini_response(response.text)
        apply_changes(operations, base_dir)
        
        print("\nChanges applied successfully!")

if __name__ == "__main__":
    code_assistant()  