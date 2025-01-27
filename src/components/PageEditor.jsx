import { useState, useRef, useEffect } from "react";
import "./PageEditor.css"; // Make sure you have styles for the components
import { Link } from "react-router-dom";
import Icon from "../Assets/icon.svg"


const Header = ({
  toggleSidebar,
  fontSize,
  setFontSize,
  textColor,
  setTextColor,
  formatText,
}) => {
  return (
    <header className="fixed top-0 w-full bg-slate-800 shadow-md z-50">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link to="/" className="delay-100">
          <div className="m-2 flex gap-2 items-center">
            <h1 className="text-4xl hover:text-gray-200">
              <span>write</span>
              <span className="font-bold text-cyan-300 hover:text-cyan-500">
                X
              </span>
            </h1>
            <img src={Icon} alt="writeX logo" className="h-9 w-auto" />
          </div>
        </Link>

        {/* Toolbar */}
        <div className="flex-grow flex items-center justify-center space-x-4">
          {/* Font Size Selector */}
          <select
            className="border rounded px-2 py-1 bg-slate-700 text-gray-300"
            onChange={(e) => setFontSize(e.target.value)}
            value={fontSize}
            aria-label="Select font size"
          >
            {[12, 14, 16, 18, 20, 24, 28, 32].map((size) => (
              <option key={size} value={`${size}px`}>
                {size}
              </option>
            ))}
          </select>

          {/* Text Color Selector */}
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            className="w-8 h-8 rounded cursor-pointer"
            aria-label="Choose text color"
          />

          {/* Toolbar Buttons */}
          {[
            { format: "bold", icon: "fa-bold" },
            { format: "italic", icon: "fa-italic" },
            { format: "underline", icon: "fa-underline" },
            { format: "insertUnorderedList", icon: "fa-list-ul" },
            { format: "justifyLeft", icon: "fa-align-left" },
            { format: "justifyCenter", icon: "fa-align-center" },
            { format: "justifyRight", icon: "fa-align-right" },
          ].map(({ format, icon }) => (
            <button
              key={format}
              onClick={() => formatText(format)}
              className="toolbar-btn px-2 py-1 rounded transition-colors duration-200"
              aria-label={format}
            >
              <i className={`fas ${icon} text-black hover:text-gray-600`} ></i>
            </button>
          ))}
        </div>

        {/* Menu Button */}
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="text-white hover:text-teal-300"
            aria-label="Toggle Sidebar"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </header>
  );
};


const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed right-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex-1 p-4">
          <div className="space-y-4">
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded">
              <i className="fas fa-user mr-2"></i> Profile
            </button>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded">
              <i className="fas fa-project-diagram mr-2"></i> Projects
            </button>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded">
              <i className="fas fa-users mr-2"></i> Characters
            </button>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded">
              <i className="fas fa-sitemap mr-2"></i> Plots
            </button>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded">
              <i className="fas fa-cog mr-2"></i> Settings
            </button>
          </div>
        </div>
        <button className="w-full text-left px-4 py-4 hover:bg-red-50 text-red-600 border-t">
          <i className="fas fa-sign-out-alt mr-2"></i> Logout
        </button>
      </div>
    </div>
  );
};

const PageEditor = () => {
  const [pages, setPages] = useState([{ id: 1, content: "" }]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [fontSize, setFontSize] = useState("16px");
  const [textColor, setTextColor] = useState("#000000");
  const pageRefs = useRef([]);

  // Apply font size and color
  useEffect(() => {
    pageRefs.current.forEach((ref) => {
      if (ref) {
        ref.style.fontSize = fontSize;
        ref.style.color = textColor;
      }
    });
  }, [fontSize, textColor, pages]);

  const handleContentChange = (pageId, content) => {
    const updatedPages = pages.map((page) =>
      page.id === pageId ? { ...page, content } : page
    );
    setPages(updatedPages);
  };

  const handleKeyUp = (e, pageId) => {
    const currentPageIndex = pages.findIndex((page) => page.id === pageId);
    const currentPage = pageRefs.current[currentPageIndex];

    if (currentPage && currentPage.scrollHeight > currentPage.clientHeight) {
      // If content overflows, create a new page
      if (currentPageIndex === pages.length - 1) {
        addNewPage();
      }
    }
  };

  const addNewPage = () => {
    setPages([...pages, { id: pages.length + 1, content: "" }]);
    setTimeout(() => {
      const nextPageRef = pageRefs.current[pages.length];
      if (nextPageRef) {
        nextPageRef.focus();
      }
    }, 0);
  };

  const formatText = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  return (
    <div className="min-h-screen bg-gray-100 " >
      <Header
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
        fontSize={fontSize}
        setFontSize={setFontSize}
        textColor={textColor}
        setTextColor={setTextColor}
        formatText={formatText}
      />

      <div className="flex pt-16">
        {/* Pages Sidebar */}
        <div className="w-48 bg-white shadow-lg h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
          {pages.map((page) => (
            <div
              key={page.id}
              className="p-2 border-b hover:bg-gray-50 cursor-pointer"
              onClick={() => pageRefs.current[page.id - 1]?.focus()}
            >
              <div className="text-xs font-medium">Page {page.id}</div>
              <div className="text-xs truncate">{page.content}</div>
            </div>
          ))}
        </div>

        {/* Editor Area */}
        <main className="flex-1 p-8 bg-gray-200 overflow-auto">
          {pages.map((page, index) => (
            <div key={page.id} className="mb-8 mx-auto">
              <div
                ref={(el) => {
                  if (!pageRefs.current[index]) pageRefs.current[index] = el;
                }}
                className="w-[210mm] h-[297mm] bg-white div-shadow p-12 mx-auto"
                contentEditable
                onInput={(e) =>
                  handleContentChange(page.id, e.currentTarget.innerHTML)
                }
                onKeyUp={(e) => handleKeyUp(e, page.id)}
                style={{ minHeight: "297mm" }}
              ></div>
            </div>
          ))}
        </main>

        {/* Collapsible Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
        />
      </div>
    </div>
  );
};

export default PageEditor;
