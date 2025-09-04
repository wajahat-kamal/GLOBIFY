import React from "react";
import logo from "../../assets/globify-logo.png";
import { useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Top Navbar */}
      <header className="w-full h-16 bg-white border-b border-gray-200 shadow-sm flex items-center justify-between px-6">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="logo"
            className="h-10 w-10 rounded-md object-cover shadow-sm"
          />
          <h1 className="text-xl font-bold text-[#181D45] tracking-wide">
            GLOBIFY
          </h1>
        </div>

        <button
          onClick={() => navigate("/login")}
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium
                     bg-primary text-white shadow-md hover:bg-primary/90 hover:shadow-lg
                     transition-all duration-300"
        >
          Logout
        </button>
      </header>

      {/* Content Layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 shadow-sm hidden md:flex flex-col">
          <nav className="flex-1 p-4 space-y-2">
            <button
              onClick={() => navigate("/")}
              className="w-full text-left px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate("/admin")}
              className="w-full text-left px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Admin Panel
            </button>
          </nav>
        </aside>

        {/* Main Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Welcome Back 👋
            </h2>
            <p className="text-gray-600">
              This is your clean dashboard layout. Add your page content here.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Layout;
