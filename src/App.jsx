// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectEditor from "./pages/ProjectEditor";
import About from "./pages/About";
import "./styles.css";
import FeaturesSection from "./components/FeaturesSection";
import SelectImages from "./components/SelectImages";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectEditor />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Routes>
        {/* <Route path="/" element={<FeaturesSection />} /> */}
      </Routes>
    </Router>
    // <>
    // <SelectImages />
    // </>
  );
}

export default App;
