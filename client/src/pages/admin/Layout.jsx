import React from "react";
import logo from "../../assets/globify-logo.png";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  FilePlus2,
  ListOrdered,
  MessageSquare,
} from "lucide-react";

function Layout() {
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "Add Blogs", path: "/add-blogs", icon: FilePlus2 },
    { name: "Blog Lists", path: "/blog-lists", icon: ListOrdered },
    { name: "Comments", path: "/comments", icon: MessageSquare },
  ];

  return (
    <div className="h-screen flex flex-col bg-white">
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
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 shadow-sm hidden md:flex flex-col">
          <nav className="flex-1 p-4 space-y-1 text-gray-700">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  onClick={() => navigate(item.path)}
                  className="flex items-center gap-3 w-full px-4 py-4 rounded-lg font-medium 
                       hover:bg-secondary hover:text-primary transition-all"
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Page Content */}
        <main className="flex-1 p-6 overflow-y-auto bg-secondary">
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
