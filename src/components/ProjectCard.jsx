import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="grid grid-cols-1 gap-6">
  
      {/* Existing Project Card */}
      <div className="w-64 h-80 bg-white border rounded-lg shadow-md overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-36 object-cover"  
        />
        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
          <p className="text-sm text-gray-700 mt-2">{project.description}</p>
          <div className="mt-4">
            <Link
              to={`/projects/${project.id}`}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Edit Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
