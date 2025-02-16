import React, { useState } from 'react';
import { LogOut, User, BookOpen, Users, MoreVertical } from 'lucide-react';

const SidebarLeft = ({ chapters, setChapters, activeChapter, setActiveChapter, isVisible, setShowLeftSidebar, onAddChapter }) => {
  const [editingChapter, setEditingChapter] = useState(null);
  const [menuOpen, setMenuOpen] = useState(null);

  const handleRename = (id, newTitle) => {
    const updatedChapters = chapters.map(ch =>
      ch.id === id ? { ...ch, title: newTitle || 'Untitled' } : ch
    );
    setChapters(updatedChapters);
    if (activeChapter.id === id) {
      setActiveChapter({ ...activeChapter, title: newTitle || 'Untitled' });
    }
    setEditingChapter(null);
  };

  const handleDelete = (id) => {
    const newChapters = chapters.filter(ch => ch.id !== id);
    setChapters(newChapters);
    if (activeChapter.id === id) {
      setActiveChapter(newChapters[0]);
    }
    setMenuOpen(null);
  };

  const handleChapterClick = (chapter) => {
    setActiveChapter(chapter);
    setShowLeftSidebar(false);
  };

  return (
    <aside className={`
      fixed md:relative
      w-64 h-screen
      bg-gray-50 border-r border-gray-200
      transform transition-transform duration-300 ease-in-out
      ${isVisible ? 'translate-x-0' : '-translate-x-full'}
      md:translate-x-0
      z-40
    `}>
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Chapters</h2>
        <ul className="space-y-2">
          {chapters.map(chapter => (
            <li
              key={chapter.id}
              className={`
                relative rounded-lg
                ${activeChapter.id === chapter.id ? 'bg-blue-50' : 'hover:bg-gray-100'}
                transition-colors
              `}
            >
              <div className="flex items-center p-3">
                {editingChapter === chapter.id ? (
                  <input
                    type="text"
                    value={chapter.title}
                    className="flex-1 px-2 py-1 border rounded"
                    onChange={(e) => handleRename(chapter.id, e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleRename(chapter.id, e.currentTarget.value);
                      }
                    }}
                    onBlur={(e) => handleRename(chapter.id, e.target.value)}
                    autoFocus
                  />
                ) : (
                  <>
                    <button
                      className="flex-1 text-left"
                      onClick={() => handleChapterClick(chapter)}
                    >
                      {chapter.title}
                    </button>
                    <button
                      onClick={() => setMenuOpen(menuOpen === chapter.id ? null : chapter.id)}
                      className="p-1 hover:bg-gray-200 rounded-full"
                      aria-label="Chapter options"
                    >
                      <MoreVertical size={16} />
                    </button>
                  </>
                )}
              </div>
              
              {menuOpen === chapter.id && (
                <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50 py-1">
                  <button
                    className="w-full px-4 py-2 text-left hover:bg-gray-100"
                    onClick={() => {
                      setEditingChapter(chapter.id);
                      setMenuOpen(null);
                    }}
                  >
                    Rename
                  </button>
                  <button
                    className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100"
                    onClick={() => handleDelete(chapter.id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
        <button
          className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          onClick={onAddChapter}
        >
          Add Chapter
        </button>
      </div>
    </aside>
  );
};

export default SidebarLeft;
