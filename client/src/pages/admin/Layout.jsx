import React from "react";
import logo from "../../assets/globify-logo.png";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../components/adimin/Sidebar";

function Layout() {
  const navigate = useNavigate();

 

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Navbar */}
      <nav className="bg-white flex items-center justify-between h-16 md:h-20 container mx-auto px-4">
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
          onClick={() => navigate("/admin")}
          className="inline-flex items-center justify-center gap-2 md:px-6 px-4 py-3 rounded-full text-sm font-medium
                       bg-primary text-white shadow-md hover:bg-primary/90 hover:shadow-lg
                       transition-all duration-300 min-w-[140px]"
        >
          <span>Logout</span>
        </button>
      </nav>

      {/* Content Layout */}
      <div className="flex h-[calc(100vh-70px)] bg-secondary">
        {/* Sidebar */}
        <Sidebar/>

        {/* Main Page Content */}
         <Outlet/>
      </div>
    </div>
  );
}

export default Layout;
