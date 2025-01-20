// src/pages/Home.js
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import Contact from "../components/Contact";


const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
     
      <HeroSection />
      <FeaturesSection />
      <Contact />
    </>
  );
};

export default Home;
