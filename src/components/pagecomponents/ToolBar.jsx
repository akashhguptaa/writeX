import React from 'react';
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';

const Toolbar = ({ selection }) => {
  const tools = [
    { icon: <Bold size={18} />, command: 'bold', label: 'Bold' },
    { icon: <Italic size={18} />, command: 'italic', label: 'Italic' },
    { icon: <Underline size={18} />, command: 'underline', label: 'Underline' },
    { icon: <AlignLeft size={18} />, command: 'justifyLeft', label: 'Align Left' },
    { icon: <AlignCenter size={18} />, command: 'justifyCenter', label: 'Align Center' },
    { icon: <AlignRight size={18} />, command: 'justifyRight', label: 'Align Right' },
  ];

  const headers = ['H1', 'H2', 'H3', 'H4'];

  const applyFormat = (command, value = '') => {
    if (selection.range) {
      const sel = window.getSelection();
      if (sel) {
        const range = selection.range.cloneRange();
        sel.removeAllRanges();
        sel.addRange(range);
        document.execCommand(command, false, value);
        const newRange = sel.getRangeAt(0);
        selection.range = newRange.cloneRange();
      }
    }
  };

  const handleFormat = (command) => {
    applyFormat(command);
  };

  const handleHeader = (level) => {
    applyFormat('formatBlock', `h${level}`);
  };

  return (
    <div
      className="fixed bg-white rounded-lg shadow-lg p-2 flex items-center gap-2 z-50 border border-gray-200"
      style={{
        top: `${selection.y - 50}px`,
        left: `${selection.x + selection.width / 2}px`,
        transform: 'translateX(-50%)',
      }}
    >
      {tools.map((tool, index) => (
        <button
          key={index}
          onClick={() => handleFormat(tool.command)}
          className="p-2 hover:bg-gray-100 rounded-md transition-colors"
          aria-label={tool.label}
        >
          {tool.icon}
        </button>
      ))}
      <div className="w-px h-6 bg-gray-200 mx-2" />
      {headers.map((header, index) => (
        <button
          key={header}
          onClick={() => handleHeader(index + 1)}
          className="px-2 py-1 hover:bg-gray-100 rounded-md text-sm font-semibold transition-colors"
        >
          {header}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;
