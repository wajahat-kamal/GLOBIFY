import React, { useState } from "react";

function BlogList() {
  const [menu, setMenu] = useState("All");
  const blogCategory = ["All", "Technology", "Startup", "Lifestyle"];

  return (
    <section className="w-full px-4 md:px-10 py-6 pt-8 bg-white">
      {/* Category Buttons */}
      <div className="flex flex-wrap items-center justify-center md:gap-6 gap-2 mb-10">
        {blogCategory.map((item) => (
          <button
            key={item}
            onClick={() => setMenu(item)}
            className={`relative px-5 py-1 text-sm md:text-[17px] font-medium rounded-4xl overflow-hidden
                       bg-gray-100 text-gray-500 transition-all duration-300
                       ${menu === item ? "bg-indigo-600 text-white" : "hover:bg-gray-200"}`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Blog Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example blog card */}
      </div>
    </section>
  );
}

export default BlogList;
