import React, { useState } from "react";
import Navbar from "../components/Navbar";
const Read = () => {
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
      title: "The Powerful Amoeba",
      description:
        "A thrilling adventure story about discovering ancient mysteries in the Himalayas.",
      image:
        "https://media.istockphoto.com/id/1533148452/photo/human-cell-on-scientific-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=5b3W2_ovifQ9tOImUFtu3V1BbXFaB2U4ckXyXTa0RSw=",
    },
    {
      id: 3,
      title: "You Matter",
      description:
        "A thrilling adventure story about discovering ancient mysteries in the Himalayas.",
      image:
        "https://media.istockphoto.com/id/871870942/photo/couple-on-a-date.webp?a=1&b=1&s=612x612&w=0&k=20&c=Jp92DiUHXfAwHDqda3jBx1RfjYPvafBlmJK_otkDRWA=",
    },
    {
      id: 4,
      title: "It's You",
      description:
        "A thrilling adventure story about discovering ancient mysteries in the Himalayas.",
      image:
        "https://images.unsplash.com/photo-1645389411992-e9ec49b158e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9tYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 5,
      title: "A Walk in the Woods",
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
      title: "Finding Me",
      description:
        "A thrilling adventure story about discovering ancient mysteries in the Himalayas.",
      image:
        "https://plus.unsplash.com/premium_photo-1736858335090-8efebf0b8ff5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]);

  return (
    <div className="bg-gray-100 min-h-screen px-8 py-6">
      {/* Header */}
      <Navbar background = "bg-slate-800" /> 
      <div className="flex items-center justify-between mb-6 pt-4">
        <h1 className="text-3xl font-bold text-gray-800">Your Stories</h1>
      </div>

      {/* Your Stories Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 2).map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
                <button className="text-blue-600 mt-2 hover:underline">
                  Continue Part {project.id}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Because you like romance
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-36 w-full object-cover"
              />
              <div className="p-2">
                <h3 className="text-sm font-semibold text-gray-800 truncate">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Read;
