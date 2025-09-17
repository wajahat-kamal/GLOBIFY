import React from "react";
import logo from "../../assets/globify-logo.png";
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
    <div className="h-[100dvh] overflow-hidden flex flex-col ">
      {/* Top Navbar */}
      <nav className="bg-secondary border-b border-gray-200 shadow-sm flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
        {/* Left: Logo + Brand */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="logo"
            className="h-10 w-10 md:h-12 md:w-12 rounded-lg object-cover shadow-md"
          />
          <h1 className="text-xl md:text-2xl font-extrabold text-[#181D45] tracking-wide hover:text-primary transition-colors duration-300">
            GLOBIFY
          </h1>
        </div>

        {/* Right: Auth button */}
        <button
          onClick={logout}
          className="inline-flex items-center justify-center gap-2 px-4 md:px-8 py-2 rounded-full text-md font-medium
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
        <main className="flex-1 h-[90dvh] p-4 md:p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
