// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Icon from "../Assets/icon.svg";

const Navbar = ({ background = "" }) => {
  return (
    <div
      className={`${background} backdrop-filter backdrop-blur-sm text-white`}
    >
      <nav>
        <div className="sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex gap-16">
              <Link to="/" className="delay-100">
                <div className="m-2 flex gap-2">
                  <h1 className="text-4xl hover:text-gray-200">
                    <span>Write</span>
                    <span className="font-bold text-cyan-300 hover:text-cyan-500">
                      X
                    </span>
                  </h1>
                  <img src={Icon} alt="writeX logo" className="h-10 w-auto" />
                </div>
              </Link>

              {/* Centered Navbar Links */}
              <div className="flex-1 flex justify-center items-center">
                <Link
                  to="/"
                  className="text-white hover:text-cyan-500 px-3 py-2 rounded-md"
                >
                  Home
                </Link>
                <Link
                  to="/projects"
                  className="text-white hover:text-cyan-500 px-3 py-2 rounded-md "
                >
                  Projects
                </Link>
                <HashLink
                  smooth
                  to="/#features"
                  className="text-white hover:text-cyan-500 px-3 py-2 rounded-md scroll-smooth"
                >
                  Features
                </HashLink>

                <Link
                  to="/about"
                  className="text-white hover:text-cyan-500 px-3 py-2 rounded-md "
                >
                  About
                </Link>
                <HashLink
                  smooth
                  to="/#contact"
                  className="text-white hover:text-cyan-500 px-3 py-2 rounded-md scroll-smooth"
                >
                  Contact
                </HashLink>
              </div>
            </div>

            {/* login and signup buttons */}
            <div className="flex items-center gap-4 ml-auto">
              <Link
                to="/read"
                className="flex items-center text-white hover:text-cyan-500 px-3 py-2 rounded-md gap-2"
              >
                <i className="fa-solid fa-book"></i>
                <p>Read</p>
              </Link>
              <Link
                className="px-4 py-2 rounded-md border border-cyan-300 text-cyan-300 text-sm text-center hover:bg-teal-600 hover:text-white"
                to="/signin"
              >
                Login
              </Link>
              <Link
                className="text-white bg-gradient-to-r from-teal-500 to-teal-700 hover:bg-gradient-to-br hover:from-teal-700 hover:to-slate-700 shadow-md dark:shadow-lg dark:shadow-teal-800 font-medium rounded-lg text-sm px-4 py-2 text-center "
                to="/signup"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
