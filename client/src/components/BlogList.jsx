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
      <div className="flex flex-wrap items-center justify-center md:gap-6 gap-2 mb-6">
        {blogCategory.map((item) => (
          <button
            key={item}
            onClick={() => setMenu(item)}
            className={`relative px-4 py-1.5 text-sm md:text-[15px] font-medium rounded-4xl overflow-hidden
                       bg-gray-100 text-gray-600 shadow-sm transition-all duration-300
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

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mb-24 px-6 sm:px-8 lg:px-20 max-w-7xl mx-auto">
        {visibleBlogs.length === 0 ? (
          <p className="my-10 sm:my-12 max-w-md mx-auto text-center text-gray-500 text-base sm:text-lg font-medium tracking-wide leading-relaxed">
            🚫 No blogs found. Please try a different search.
          </p>
        ) : (
          visibleBlogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
        )}
      </section>
    </section>
  );
}

export default BlogList;
