import React from "react";
import logo from "../assets/globify-logo.png";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-12 py-4 flex justify-between items-center">
      {/* Logo + Title */}
      <div className="flex items-center gap-3 text-gray-900">
        <img
          src={logo}
          alt="Globify Logo"
          className="h-10 w-10 rounded-full object-cover"
        />
        <h2 className="text-xl font-bold">GLOBIFYE</h2>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
          Sign Up
        </button>
        <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
