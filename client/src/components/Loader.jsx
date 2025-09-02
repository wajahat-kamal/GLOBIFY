import React from "react";

function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        {/* Outer Ring */}
        <div className="h-16 w-16 rounded-full border-4 border-gray-200"></div>

        {/* Spinning Ring */}
        <div className="absolute top-0 left-0 h-14 w-14 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
      </div>
    </div>
  );
}

export default Loader;
