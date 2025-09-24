import React, { useState } from "react";
import BlogCard from "./BlogCard";
import { UseAppContext } from "../context/AppContext";

function BlogList() {
  const [menu, setMenu] = useState("All");
  const blogCategory = ["All", "Technology", "Startup", "Lifestyle"];

  const { blogs, input } = UseAppContext();

  const filteredBlogs = () => {
    if (input === "") {
      return blogs;
    }
    return blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(input.toLowerCase()) ||
        blog.category.toLowerCase().includes(input.toLowerCase())
    );
  };

  const visibleBlogs = filteredBlogs().filter(
    (blog) => menu === "All" || blog.category === menu
  );

  return (
    <section className="w-full px-4 md:px-10 pt-8">
      {/* Category Buttons */}
      <div className="flex flex-wrap items-center justify-center md:gap-6 gap-2 max-sm:gap-1.5 mb-6">
        {blogCategory.map((item) => (
          <button
            key={item}
            onClick={() => setMenu(item)}
            className={`relative
                  px-4 py-1.5 md:px-4 md:py-1.5
                  max-sm:px-2.5 max-sm:py-1      
                  text-sm md:text-[15px] max-sm:text-xs  
                  font-medium rounded-4xl overflow-hidden
                  bg-gray-100 text-gray-600 shadow-sm
                  transition-all duration-300
                  ${
                    menu === item
                      ? "bg-indigo-600 text-white shadow"
                      : "hover:bg-gray-200"
                  }`}
          >
            {item}
          </button>
        ))}
      </div>

      <section className="max-w-7xl mx-auto mb-24 px-6 sm:px-8 lg:px-20">
        {visibleBlogs.length === 0 ? (
          <div className="flex flex-col items-center justify-center w-full py-16">
            <p className="max-w-md text-center text-gray-500 text-base sm:text-lg font-medium tracking-wide leading-relaxed">
              🚫 No blogs found. Please try again.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {visibleBlogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        )}
      </section>
    </section>
  );
}

export default BlogList;
