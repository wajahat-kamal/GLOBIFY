import React from "react";
import { LogIn } from "lucide-react";
import logo from "../assets/globify-logo.png";
import { UseAppContext } from "../context/AppContext";

export default function Navbar() {
  const { navigate, token } = UseAppContext();

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 md:h-20 px-4 sm:px-8 lg:px-12">
        {/* Logo & Brand */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 md:gap-3 max-sm:gap-1 cursor-pointer group"
        >
          <img
            src={logo}
            alt="Globify logo"
            className="
      h-10 w-10
      max-sm:h-8 max-sm:w-8         
      rounded-lg object-cover shadow
      group-hover:scale-105
      transition-transform duration-300
    "
          />
          <h1
            className="
      text-xl md:text-2xl
      max-sm:text-lg                 
      font-extrabold text-[#181D45]
      tracking-wide
      group-hover:text-primary
      transition-colors duration-300
    "
          >
            GLOBIFY
          </h1>
        </div>

        {/* Right: Auth button */}
        <button
          onClick={() => navigate("/admin")}
          className="
    group inline-flex items-center justify-center gap-2
    min-w-[100px]
    px-5 py-2.5 md:px-6
    max-sm:px-4 max-sm:py-2   
    rounded-full
    text-sm md:text-base
    max-sm:text-xs                
    font-medium
    bg-gradient-to-r from-primary to-primary/90 text-white
    shadow-md hover:shadow-xl hover:scale-105
    transition-all duration-300
  "
        >
          <span>{token ? "Dashboard" : "Admin Login"}</span>
          <LogIn className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </nav>
    </header>
  );
}
