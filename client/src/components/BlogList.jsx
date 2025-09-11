import React, { useState } from "react";
import BlogCard from "./BlogCard";
import { blogsData } from "../assets/blogsData";

function BlogList() {
  const [menu, setMenu] = useState("All");
  const blogCategory = ["All", "Technology", "Startup", "Lifestyle"];

  return (
    <section className="w-full px-4 md:px-10 py-6 pt-8">
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

      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6">
        {blogsData
          .filter((blog) => (menu === "All" ? true : blog.category === menu))
          .map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
      </section>
    </section>
  );
}

export default BlogList;
