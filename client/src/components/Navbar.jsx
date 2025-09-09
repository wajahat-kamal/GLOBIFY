import React from "react";
import { LogIn } from "lucide-react";
import logo from "../assets/globify-logo.png";
import { useNavigate } from "react-router-dom";
import avatar from "../assets/user-avatar.png";
import { useSelector } from "react-redux";

export default function Navbar() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user?.user);

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

          {user ? (
            <div
              onClick={() => navigate("/admin")}
              className="flex items-center gap-3 pl-3 pr-6 py-1 h-14 rounded-full bg-primary shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Avatar */}
              <img
                src={avatar}
                alt="Avatar"
                className="w-10 h-10 rounded-full border border-white/20 shadow-md object-cover"
              />

              {/* Text + Icon */}
              <div className="flex flex-col text-white leading-none">
                <div className="flex items-center gap-1 text-sm md:text-base font-semibold tracking-wide">
                  <span>Dashboard</span>
                  <LogIn className="w-4 h-4" />
                </div>
                <span className="text-xs md:text-sm font-medium opacity-90">
                  {user?.fullName || "User"}
                </span>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="inline-flex items-center justify-center gap-2 md:px-6 px-4 py-3 rounded-full text-sm font-medium
                     bg-primary text-white shadow-md hover:bg-primary/90 hover:shadow-lg
                     transition-all duration-300 min-w-[140px]"
            >
              <span>Login / Signup</span>
              <LogIn className="h-4 w-4" />
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
