import React, { useState } from "react";
import BlogCard from "./BlogCard";

function BlogList() {
  const [menu, setMenu] = useState("All");
  const blogCategory = ["All", "Technology", "Startup", "Lifestyle"];

  const dummyBlogs = [
    {
      _id: "1",
      title: "The Future of Artificial Intelligence",
      description:
        "Artificial Intelligence is transforming industries from healthcare to finance. Explore how AI is reshaping the future and creating new opportunities.",
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    },
    {
      _id: "2",
      title: "5 Lessons from Startup Failures",
      description:
        "Startups fail for many reasons. In this article, we dive into common mistakes new founders make and what you can learn from them.",
      category: "Startup",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      _id: "3",
      title: "Healthy Morning Routines",
      description:
        "A good morning routine sets the tone for the day. Discover simple lifestyle hacks to boost productivity and stay healthy.",
      category: "Lifestyle",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
    },
    {
      _id: "4",
      title: "Top 10 JavaScript Frameworks in 2025",
      description:
        "JavaScript frameworks keep evolving every year. Here’s a list of the most popular frameworks you should learn in 2025.",
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    },
  ];

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

      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {dummyBlogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </section>
    </section>
  );
}

export default BlogList;
