import React from 'react';

const MobileMenuToggle = ({ icon, onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors"
      aria-label={label}
    >
      {icon}
    </button>
  );
};

export default MobileMenuToggle;
