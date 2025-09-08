import React from "react";
import { LogIn } from "lucide-react";
import logo from "../assets/globify-logo.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="w-full backdrop-blur-md  absolute top-0 z-50">
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Left: Logo + Brand */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src={logo}
              alt="logo"
              className="h-10 w-10 rounded-md object-cover shadow-sm"
            />
            <h1 className="text-[25px] md:text-2xl font-bold text-[#181D45] tracking-wide transition-colors duration-300">
              GLOBIFY
            </h1>
          </div>

          {/* Right: Auth button */}
          <button
            onClick={() => {false ? navigate("/admin") : navigate("/signup")}}
            className="inline-flex items-center justify-center gap-2 md:px-6 px-4 py-3 rounded-full text-sm font-medium
                       bg-primary text-white shadow-md hover:bg-primary/90 hover:shadow-lg
                       transition-all duration-300 min-w-[140px]"
          >
            <span>Admin Login</span>
            <LogIn className="h-4 w-4" />
          </button>
        </nav>
      </div>
    </header>
  );
}
