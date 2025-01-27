import React from "react";
import Icon from "../Assets/icon.svg";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white drop-shadow-xl rounded-lg p-8 max-w-sm w-full">
        <div className="flex flex-col items-center ">
          <Link to="/" className="delay-100">
            <div className="m-2 flex gap-2">
              <h1 className="text-4xl font-bold text-slate-700 hover:text-gray-500">
                <span>write</span>
                <span className="font-extrabold text-cyan-600 hover:text-cyan-500">
                  X
                </span>
              </h1>
              <img src={Icon} alt="writeX logo" className="h-10 w-auto" />
            </div>
          </Link>
          <h2 className="pt-6 text-2xl"> Welcome</h2>
          <p className="pt-2">Login to contiune your writing with writeX</p>
        </div>
        <form className="pt-8">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
