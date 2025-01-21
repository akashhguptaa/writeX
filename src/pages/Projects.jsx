// src/pages/Projects.js
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import { FaPlus } from "react-icons/fa";
import NewProject from "../components/NewProject";

const Projects = () => {
  const [isActive, setIsActive] = useState(false);

  const handleStartWriting = () => {
    setIsActive(true);
  };

  const closePopup = () =>{
    setIsActive(false);
  }

  const [projects] = useState([
    {
      id: 1,
      title: "The Mountain's Secret",
      description:
        "A thrilling adventure story about discovering ancient mysteries in the Himalayas.",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    },
    {
      id: 2,
      title: "The powerful amoeba",
      description:
        "A thrilling adventure story about discovering ancient mysteries in the Himalayas.",
      image:
        "https://media.istockphoto.com/id/1533148452/photo/human-cell-on-scientific-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=5b3W2_ovifQ9tOImUFtu3V1BbXFaB2U4ckXyXTa0RSw=",
    },
    {
      id: 3,
      title: "You matters",
      description:
        "A thrilling adventure story about discovering ancient mysteries in the Himalayas.",
      image:
        "https://media.istockphoto.com/id/871870942/photo/couple-on-a-date.webp?a=1&b=1&s=612x612&w=0&k=20&c=Jp92DiUHXfAwHDqda3jBx1RfjYPvafBlmJK_otkDRWA=",
    },
    {
      id: 4,
      title: "its you",
      description:
        "A thrilling adventure story about discovering ancient mysteries in the Himalayas.",
      image:
        "https://images.unsplash.com/photo-1645389411992-e9ec49b158e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9tYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 5,
      title: "A walk in the woods",
      description:
        "A thrilling adventure story about discovering ancient mysteries in the Himalayas.",
      image:
        "https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fHww",
    },
    {
      id: 6,
      title: "The Ancient",
      description:
        "A thrilling adventure story about discovering ancient mysteries in the Himalayas.",
      image:
        "https://media.istockphoto.com/id/2165741143/photo/scenic-views-of-mumbai-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=hHrNLvs_QUpGjkrYmDGs9V-smxl82MjJydFvlo_1SDY=",
    },
    {
      id: 7,
      title: "Findnig me",
      description:
        "A thrilling adventure story about discovering ancient mysteries in the Himalayas.",
      image:
        "https://plus.unsplash.com/premium_photo-1736858335090-8efebf0b8ff5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    // Add more projects here
  ]);

  return (
    <>
      <Navbar background="bg-slate-800" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        
          <div
            onClick={handleStartWriting}
            className="w-64 h-80 border-2 border-dashed border-gray-300 rounded-lg p-6 flex items-center justify-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors"
          >
            <FaPlus className="text-4xl text-gray-400" />
          </div>
          {isActive && (
            <div className="fixed inset-0 flex items-center justify-center">
              <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full relative">
                <button
                  onClick={closePopup}
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                >
                  ✖
                </button>
                <NewProject />
              </div>
            </div>
          )}
          
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} className = "w-64 h-80"/>
          ))}
          </div>
          
        </div>
    
    </>
  );
};

export default Projects;
