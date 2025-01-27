import React from "react";
import { Link } from "react-router-dom";
import ProjectInfoBar from "./ProjectInfoBar";
import SideBar from "./SideBar";

export default function ToolBar() {
  return (
    <div
      id="mainContent"
      className="bg-slate-800 flex justify-between items-center transition-all duration-300 p-3 shadow-md"
    >
      {/* Logo Link (Left-aligned) */}

      <div className="m-2 flex flex-row">
      <i className="fa-solid fa-bars text-2xl text-white justify-center flex items-center p-2 "></i>

        <Link to="/" className="delay-100 pl-5">
          <h1 className="text-4xl text-white hover:text-gray-200">
            <span>write</span>
            <span className="font-bold text-cyan-300 hover:text-cyan-500">
              X
            </span>
          </h1>
        </Link>
      </div>

      {/* Toolbar (Centered) */}
      <div className = "flex flex-row items-center gap-8 pr-4">
      <div className="toolbar bg-gray-100 flex justify-center p-3 border border-gray-400 rounded-lg shadow-sm max-w-md w-full ">
        <div className="flex flex-wrap gap-4">
          <select
            id="fontSize"
            className="border border-gray-300 rounded drop-shadow-lg px-2 py-1"
          >
            <option value="12">12</option>
            <option value="14">14</option>
            <option value="16" selected>
              16
            </option>
            <option value="18">18</option>
            <option value="20">20</option>
            <option value="24">24</option>
            <option value="28">28</option>
            <option value="32">32</option>
          </select>

          <button
            onClick={() => formatText("bold")}
            className="toolbar-btn border border-gray-600 drop-shadow-lg px-2 py-1"
          >
            <i className="fas fa-bold"></i>
          </button>
          <button
            onClick={() => formatText("italic")}
            className="toolbar-btn border border-gray-300 drop-shadow-lg px-2 py-1"
          >
            <i className="fas fa-italic"></i>
          </button>
          <button
            onClick={() => formatText("insertUnorderedList")}
            className="toolbar-btn border border-gray-300 drop-shadow-lg px-2 py-1"
          >
            <i className="fas fa-list-ul"></i>
          </button>
          <button
            onClick={() => alignText("left")}
            className="toolbar-btn border border-gray-300 drop-shadow-lg px-2 py-1"
          >
            <i className="fas fa-align-left"></i>
          </button>
          <button
            onClick={() => alignText("center")}
            className="toolbar-btn border border-gray-300 drop-shadow-lg px-2 py-1"
          >
            <i className="fas fa-align-center"></i>
          </button>
          <button
            onClick={() => alignText("right")}
            className="toolbar-btn border border-gray-300 drop-shadow-lg px-2 py-1"
          >
            <i className="fas fa-align-right"></i>
          </button>
        </div>
        
      </div>
      <div class="flex justify-center items-center bg-gray-200 rounded-full w-16 h-16 border-4 border-gray-800">
  <i class="fa-solid fa-user text-gray-600 text-xl"></i>
</div>

      </div>
    </div>
  );

  {
    /* <SideBar />
      <ProjectInfoBar /> */
  }

  {
    /* <div id="pages-container">
        <div
          class="page bg-white shadow-lg mx-auto p-8 mb-8"
          contenteditable="true"
          data-page="1"
        >
          <h1 class="text-3xl font-bold mb-4">The Mountain's Secret</h1>
          <h2 class="text-xl font-semibold mb-4">Chapter 1: The Discovery</h2>
          <p class="mb-4">
            The crisp mountain air bit at Sarah's cheeks as she made her way up
            the narrow path. Twenty years of mountaineering experience had
            taught her to respect these heights, but nothing could have prepared
            her for what she was about to discover.
          </p>
          <p class="mb-4">
            The ancient map, found in her grandfather's attic, had led her to
            this remote corner of the Himalayas. Its weathered parchment spoke
            of a hidden monastery that held secrets dating back to the first
            explorers of these peaks.
          </p>
          <p>
            As she rounded the next bend, her breath caught in her throat.
            There, carved into the very face of the mountain, stood an entrance
            adorned with symbols she had never seen before in all her years of
            research.
          </p>
        </div> */
  }
  {
    /* </div> */
  }
  {
    /* </div> */
  }
  {
    /* ); */
  }
}
