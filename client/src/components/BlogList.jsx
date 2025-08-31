import React from "react";

function BlogList() {
  const blogCategory = ["All", "Technology", "Startup", "Lifestyle"];

  return (
    <section className="w-full px-4 md:px-10 py-6 pt-8 bg-white">
      {/* Category Buttons */}
      <div className="flex flex-wrap items-center justify-center md:gap-4 gap-2 mb-10">
        {blogCategory.map((item) => (
          <button
            key={item}
            className="px-2 md:px-4 py-1 rounded-4xl text-sm md:text-lg font-medium 
                       bg-gray-100 text-gray-500 
                       hover:bg-primary hover:text-white 
                       shadow-sm transition-all duration-300"
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
