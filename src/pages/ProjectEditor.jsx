import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import PageEditor from "../components/PageEditor";

const ProjectEditor = () => {
  const { id } = useParams();
  const [projectData, setProjectData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem(`project_${id}`));
    // Ensure content is initialized as an array if not present
    return storedData
      ? {
          ...storedData,
          content: Array.isArray(storedData.content) ? storedData.content : [],
        }
      : {
          title: "Untitled",
          content: [""],
        };
  });

  const handleSave = () => {
    localStorage.setItem(`project_${id}`, JSON.stringify(projectData));
    alert("Project saved!");
  };

  return (
    <>
      <PageEditor
        projectData={projectData}
        setProjectData={setProjectData}
        onSave={handleSave}
      />
    </>
  );
};

export default ProjectEditor;
