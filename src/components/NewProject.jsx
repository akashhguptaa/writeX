import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewProject = () => {
  const navigate = useNavigate();
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    image: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle project creation logic here
    // navigate("/writing/new"); // Navigate to editor with new project
  };

  return (
    <div className="pt-10 px-4 max-w-2xl mx-auto text-slate-900">
      <h1 className="text-3xl font-bold mb-8">Create New Project</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project Title <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 border rounded-md"
            value={projectData.title}
            onChange={(e) =>
              setProjectData({ ...projectData, title: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description (Optional)
          </label>
          <textarea
            className="w-full px-4 py-2 border rounded-md"
            rows="4"
            value={projectData.description}
            onChange={(e) =>
              setProjectData({ ...projectData, description: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cover Image (Optional)
          </label>
          <input
            type="file"
            accept="image/*"
            className="w-full"
            onChange={(e) =>
              setProjectData({ ...projectData, image: e.target.files[0] })
            }
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded-md border border-cyan-700 text-cyan-700 text-sm text-center hover:bg-teal-600 hover:text-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-teal-600 to-teal-800 hover:bg-gradient-to-br hover:from-teal-700 hover:to-slate-700 shadow-md dark:shadow-lg dark:shadow-teal-800 font-medium rounded-lg text-sm px-4 py-2 text-center "
          >
            Create Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewProject;
