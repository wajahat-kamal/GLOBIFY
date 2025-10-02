import React from "react";
import mainBG from "../assets/main-bg.jpg";

function Loader() {
  return (
    <div
      className="flex items-center justify-center min-h-screen text-gray-900
    bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${mainBG})` }}
    >
      <div className="flex flex-col items-center">
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-4 border-gray-900/30 animate-ping"></div>
          <div className="w-14 h-14 rounded-full border-4 border-gray-900 border-t-transparent animate-spin"></div>
        </div>

        <p className="mt-6 text-lg font-semibold tracking-wide animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}

export default Loader;
