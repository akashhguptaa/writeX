import React, { useState } from "react";
import ToolBar from "./toolBar";
import SideBar from "./SideBar";
import ProjectInfoBar from "./ProjectInfoBar";

const PageEditor = ({ projectData, setProjectData, onSave }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleContentChange = (e, pageIndex) => {
    const updatedContent = [...projectData.content];
    updatedContent[pageIndex] = e.target.innerHTML;
    setProjectData({ ...projectData, content: updatedContent });
  };

  const addNewPage = () => {
    const updatedContent = [...projectData.content, ""];
    setProjectData({ ...projectData, content: updatedContent });
    setCurrentPage(updatedContent.length);
  };

  const renderPages = () => {
    // Ensure content is an array before calling map
    if (Array.isArray(projectData.content)) {
      return projectData.content.map((pageContent, index) => (
        <div
          key={index}
          className={`page bg-white shadow-lg mx-auto p-8 mb-8 ${
            index + 1 === currentPage ? "" : "hidden"
          }`}
          contentEditable
          suppressContentEditableWarning
          onInput={(e) => handleContentChange(e, index)}
        >
          {pageContent}
        </div>
      ));
    }
    return null; // Return null if content is not an array
  };

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex + 1);
  };

  return (
    <div className="page-editor bg-gray-300">
      {/* Toolbar */}
      <ToolBar />
      <SideBar />
      <ProjectInfoBar />

      <div className="toolbar bg-white p-4 rounded-t-lg shadow-sm mb-4 flex justify-between">
        <button
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
          onClick={addNewPage}
        >
          Add Page
        </button>
        <button
          className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
          onClick={onSave}
        >
          Save Project
        </button>
      </div>

      {/* Pages Container */}
      <div id="pages-container">{renderPages()}</div>

      {/* Pagination */}
      <div className="pagination flex justify-center gap-2 mt-4">
        {projectData.content.map((_, index) => (
          <button
            key={index}
            className={`px-3 py-1 border rounded ${
              index + 1 === currentPage
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => goToPage(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PageEditor;
