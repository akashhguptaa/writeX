import React from 'react';

const FeaturesSection = () => {


  const features = [
    {
      title: 'Real-Time Collaboration',
      description:
        'Work together on projects in real-time, with live updates and comments.',
      icon: 'fas fa-users',
    },
    {
      title: 'Advanced Text Editing',
      description:
        'Rich text formatting tools for a professional writing experience.',
      icon: 'fas fa-pencil-alt',
    },
    {
      title: 'Cloud Sync',
      description: 'Access your work from anywhere with automatic cloud syncing.',
      icon: 'fas fa-cloud',
    },
    {
      title: 'Project Management',
      description: 'Organize and manage all your writing projects in one place.',
      icon: 'fas fa-folder',
    },
  ];

  return (
    <div id = "features" className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-slate-700 text-center mb-8">
          Our Features
        </h2>
        <div className="flex md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white flex-col shadow-lg rounded-lg p-6 flex items-center justify-center text-center"
            >
              <div className="text-blue-600 text-4xl mb-4">
                <i className={feature.icon}></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800">{feature.title}</h3>
              <p className="text-gray-700 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
