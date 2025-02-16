import React, { useState, useRef, useEffect } from 'react';
import { Menu, Settings } from 'lucide-react';
import Toolbar from './pagecomponents/Toolbar';
import SidebarLeft from './pagecomponents/SidebarLeft';
import SidebarRight from './pagecomponents/SidebarRight';
import MobileMenuToggle from './pagecomponents/MobileMenuToggle';

function PageEditor() {
  const [chapters, setChapters] = useState([
    { id: 1, title: 'Untitled 1', content: '' },
    { id: 2, title: 'Untitled 2', content: '' },
  ]);
  const [activeChapter, setActiveChapter] = useState(chapters[0]);
  const [showLeftSidebar, setShowLeftSidebar] = useState(true);
  const [showRightSidebar, setShowRightSidebar] = useState(true);
  const [selection, setSelection] = useState(null);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const editorRef = useRef(null);
  const titleRef = useRef(null);

  const handleSelection = () => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    if (!range) return;

    if (!editorRef.current?.contains(range.commonAncestorContainer)) {
      setSelection(null);
      return;
    }

    const rect = range.getBoundingClientRect();
    if (rect.width > 0) {
      setSelection({
        x: rect.x,
        y: rect.y,
        width: rect.width,
        height: rect.height,
        range: range.cloneRange(),
      });
    }
  };

  const handleClickOutside = (e) => {
    if (editorRef.current && !editorRef.current.contains(e.target)) {
      setSelection(null);
    }
    if (titleRef.current && !titleRef.current.contains(e.target)) {
      setIsEditingTitle(false);
    }
  };

  const updateChapterTitle = (newTitle) => {
    const updatedChapters = chapters.map(ch =>
      ch.id === activeChapter.id ? { ...ch, title: newTitle || 'Untitled' } : ch
    );
    setChapters(updatedChapters);
    setActiveChapter({ ...activeChapter, title: newTitle || 'Untitled' });
  };

  const handleTitleChange = (e) => {
    updateChapterTitle(e.target.value);
  };

  const handleTitleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsEditingTitle(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleSelection);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mouseup', handleSelection);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const addNewChapter = () => {
    const newChapter = {
      id: Math.max(...chapters.map(ch => ch.id)) + 1,
      title: `Untitled ${chapters.length + 1}`,
      content: '',
    };
    setChapters([...chapters, newChapter]);
    setActiveChapter(newChapter);
    setShowLeftSidebar(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="flex h-screen">
        <div className="fixed top-4 left-4 md:hidden z-50">
          <MobileMenuToggle
            icon={<Menu size={24} />}
            onClick={() => setShowLeftSidebar(!showLeftSidebar)}
            label="Toggle Chapters"
          />
        </div>
        <div className="fixed top-4 right-4 md:hidden z-50">
          <MobileMenuToggle
            icon={<Settings size={24} />}
            onClick={() => setShowRightSidebar(!showRightSidebar)}
            label="Toggle Settings"
          />
        </div>

        <SidebarLeft
          chapters={chapters}
          setChapters={setChapters}
          activeChapter={activeChapter}
          setActiveChapter={setActiveChapter}
          isVisible={showLeftSidebar}
          setShowLeftSidebar={setShowLeftSidebar}
          onAddChapter={addNewChapter}
        />

        <main className="flex-1 overflow-auto bg-white p-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              {isEditingTitle ? (
                <input
                  ref={titleRef}
                  type="text"
                  value={activeChapter.title}
                  onChange={handleTitleChange}
                  onKeyDown={handleTitleKeyDown}
                  className="text-4xl font-bold text-gray-800 w-full border-b-2 border-blue-500 focus:outline-none"
                  autoFocus
                />
              ) : (
                <h1
                  className="text-4xl font-bold text-gray-800 cursor-pointer hover:text-blue-600 transition-colors"
                  onClick={() => setIsEditingTitle(true)}
                >
                  {activeChapter.title}
                </h1>
              )}
            </div>
            <div
              ref={editorRef}
              className="prose max-w-none focus:outline-none min-h-[200px]"
              contentEditable
              suppressContentEditableWarning
              onInput={(e) => {
                const content = e.currentTarget.innerHTML;
                const updatedChapters = chapters.map(ch =>
                  ch.id === activeChapter.id ? { ...ch, content } : ch
                );
                setChapters(updatedChapters);
                setActiveChapter({ ...activeChapter, content });
              }}
              dangerouslySetInnerHTML={{ __html: activeChapter.content }}
            />
          </div>
        </main>

        <SidebarRight isVisible={showRightSidebar} />

        {selection && (
          <Toolbar selection={selection} />
        )}
      </div>
    </div>
  );
}

export default PageEditor;
