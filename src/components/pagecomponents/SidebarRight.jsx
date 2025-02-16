import React from 'react';
import { LogOut, User, BookOpen, Users } from 'lucide-react';

const SidebarRight = ({ isVisible }) => {
  const sections = [
    {
      title: 'Characters Info',
      icon: <Users size={20} />,
      content: 'Manage your story characters and their details here.',
    },
    {
      title: 'Plots',
      icon: <BookOpen size={20} />,
      content: 'Keep track of your story plots and subplots.',
    },
    {
      title: 'User Profile',
      icon: <User size={20} />,
      content: 'View and edit your profile settings.',
    },
  ];

  return (
    <aside className={`
      fixed md:relative right-0
      w-64 h-screen
      bg-gray-50 border-l border-gray-200
      transform transition-transform duration-300 ease-in-out
      ${isVisible ? 'translate-x-0' : 'translate-x-full'}
      md:translate-x-0
      z-40
    `}>
      <div className="p-6 h-full flex flex-col">
        <div className="flex-1">
          {sections.map((section, index) => (
            <div key={index} className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                {section.icon}
                <h2 className="text-lg font-semibold text-gray-800">
                  {section.title}
                </h2>
              </div>
              <p className="text-gray-600 text-sm">
                {section.content}
              </p>
            </div>
          ))}
        </div>
        
        <button className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default SidebarRight;
