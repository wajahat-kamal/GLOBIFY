import React from "react";
import { LogIn } from "lucide-react";
import logo from "../assets/globify-logo.png";
import { UseAppContext } from "../context/AppContext";

export default function Navbar() {
  const {navigate, token} =  UseAppContext();

  return (
    <header className="w-full backdrop-blur-md absolute top-0 z-50">
      <nav className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-22 flex items-center justify-between h-16 md:h-20">

        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="logo"
            className="h-10 w-10 rounded-md object-cover shadow-sm"
          />
          <h1 className="text-[25px] md:text-2xl font-bold text-[#181D45] tracking-wide">
            GLOBIFY
          </h1>
        </div>

        {/* Right: Auth button */}
        <button
          onClick={() => token ? navigate("/admin") : navigate("/login")}
          className="group inline-flex items-center justify-center gap-2 md:px-6 px-4 py-3 rounded-full text-sm font-medium
           bg-gradient-to-r from-primary to-primary/80 text-white shadow-md hover:shadow-xl
           hover:scale-103 transition-all duration-300 min-w-[150px]"
        >
          <span>{token ? 'Dashboard' : 'Admin Login'}</span>
          <LogIn className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </nav>
    </header>
  );
}
