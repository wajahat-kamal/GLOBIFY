import React from "react";
import logo from "../../assets/globify-logo.svg";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import { UseAppContext } from "../../context/AppContext";

function Layout() {
  const { axios, setToken, navigate } = UseAppContext();

  const logout = () => {
    localStorage.removeItem("token");
    axios.defaults.headers.common["Authorization"] = null;
    setToken(null);
    navigate("/");
  };

  return (
    <div className="h-[100dvh] overflow-hidden flex flex-col">
      {/* Top Navbar */}
      <nav className="bg-adminBG border-b border-gray-200 shadow-sm flex items-center justify-between h-14 md:h-16 px-4 md:px-6">
        {/* Left: Logo + Brand */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="logo"
            className="h-8 w-8 md:h-10 md:w-10 rounded-lg object-cover shadow-md"
          />
          <h1 className="text-lg md:text-xl font-extrabold text-[#181D45] tracking-wide hover:text-primary transition-colors duration-300">
            GLOBIFY
          </h1>
        </div>

        {/* Right: Auth button */}
        <button
          onClick={logout}
          className="inline-flex items-center justify-center gap-2 px-3 md:px-5 py-1.5 rounded-full text-sm font-medium
                   bg-primary text-white shadow-md hover:bg-primary/90 hover:shadow-lg
                   transition-all duration-300"
        >
          <span>Logout</span>
        </button>
      </nav>

      {/* Content Layout */}
      <div className="flex flex-1 bg-indigo-50">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Page Content */}
        <main className="flex-1 h-[90dvh] p-3 md:p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
