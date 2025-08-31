import React from "react";

function BlogList() {
  const blogCategory = ["All", "Technology", "Startup", "Lifestyle", "Finance"];

  return (
    <div className="w-full px-4 md:px-8 py-6">
      {/* Category Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
        {blogCategory.map((item) => (
          <button
            key={item}
            className="px-5 py-2 rounded-lg text-sm font-medium 
                       bg-gray-100 text-gray-700 
                       hover:bg-indigo-600 hover:text-white 
                       shadow-sm transition-all duration-300"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Blog Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* blog cards */}
      </div>
    </div>
  );
}

export default BlogList;
