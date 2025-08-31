import React from "react";

function BlogList() {
  const blogCategory = ["All", "Technology", "Startup", "Lifestyle", "Finance"];

  return (
    <section className="w-full px-4 md:px-10 py-6 bg-white">
      {/* Category Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        {blogCategory.map((item) => (
          <button
            key={item}
            className="px-5 py-2 rounded-md text-sm font-medium 
                       bg-gray-100 text-gray-700 
                       hover:bg-indigo-600 hover:text-white 
                       shadow-sm transition-all duration-300"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Blog Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example blog card */}
        <div className="p-6 bg-white border rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-gray-800">Sample Blog</h3>
          <p className="mt-2 text-sm text-gray-600">
            This is a sample blog card. Replace with your real blog data.
          </p>
          <button className="mt-4 inline-block px-4 py-2 text-sm rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}

export default BlogList;
