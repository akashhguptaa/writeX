import React from "react";
import { useState } from "react";

function Gallery() {
  return (
    <div>
      <h1>Gallery Content</h1>
    </div>
  );
}

function Upload() {
  return (
    <div>
      <h1>Upload Content</h1>
    </div>
  );
}

function Search() {
  return (
    <div>
      <h1>Search based content</h1>
    </div>
  );
}

function Url() {
  return (
    <div>
      <h1>Url Based Content</h1>
    </div>
  );
}

export default function SelectImages() {
  const [isActive, setIsActive] = useState(null);
  const handleIsActive = (componentName) => {
    setIsActive(componentName);
  };
  const closePopUp = () => {
    setIsActive(null);
  };

  return (
    <div>
      <nav className = "flex flex-col">
        <button onClick={() => handleIsActive("Gallery")}>Gallery</button>
        <button onClick={() => handleIsActive("Upload")}>Upload</button>
        <button onClick={() => handleIsActive("Url")}>Url</button>
        <button onClick={() => handleIsActive("Search")}>Search</button>

      </nav>
      <div>
        {isActive === "Gallery" && <Gallery />}
        {isActive === "Upload" && <Upload />}
        {isActive === "Url" && <Url />}
        {isActive === "Search" && <Search />}
      </div>
    </div>
  );
}
