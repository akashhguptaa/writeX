import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Navbar from "./Navbar";
import NewProject from "./NewProject";

const HeroSection = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  const handleStartWriting = () => {
    const api_key = import.meta.env.UNSPLASH_ACCESS_TOKEN;
    console.log("your api key is: ", api_key);
    setIsActive(true);
  };

  const closePopup = () => {
    setIsActive(false);
  };

  return (
    <>
      <div className="relative overflow-hidden h-screen bg-gray-900 text-white">
        <div className="relative z-20 shadow-2xl">
          <Navbar />
        </div>

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover object-center opacity-70 "
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Writer working"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-50"></div>
        </div>

        {/* Content */}
        <main className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-6">
            <h2 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              <span className="block">Write and Edit</span>
              <span className="block bg-gradient-to-r from-cyan-700 via-teal-500 to-sky-700 bg-clip-text text-transparent text-glow">
                Like Never Before
              </span> 
            </h2>
            <p className="mt-6 text-lg text-gray-200 sm:text-xl max-w-2xl mx-auto">
              Create, edit, and organize your documents with our powerful online
              text editor. Experience seamless writing with professional
              formatting tools.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button
                onClick={handleStartWriting}
                className="animate-bounce-in"
                variant="startWriting"
                style={{
                  animation: "bounceIn 1s ease-out 1s both",
                }}
              >
                Start Writing
              </Button>
            </div>
          </div>
        </main>

        {/* Pop-up */}
        {isActive && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
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
      </div>
    </>
  );
};

export default HeroSection;
