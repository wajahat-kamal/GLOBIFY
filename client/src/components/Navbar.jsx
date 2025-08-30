import React from "react";
import { LogIn } from "lucide-react";
import logo from "../assets/globify-logo.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-white/80 backdrop-blur-sm shadow-sm fixed top-0 z-50">
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          
          {/* Left: Logo + Brand */}
          <div
            className="flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => navigate("/")}
          >
            <img
              src={logo}
              alt="Brand logo"
              className="h-10 w-10 rounded-md object-cover shadow-sm"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#586FE5] hover:text-[#4f63d5] tracking-wide">
                GLOBIFY
              </h1>
            </div>
          </div>

          {/* Right: Auth button */}
          <button
            onClick={() => navigate("/admin")}
            className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full text-sm font-medium
                       bg-[#586FE5] text-white shadow-md hover:bg-[#4f63d5] hover:shadow-lg
                       transition-all duration-300 min-w-[120px]"
          >
            <span>Admin Login</span>
            <LogIn className="h-4 w-4" />
          </button>

        </nav>
      </div>
    </header>
  );
}
