import React, { useEffect, useState } from "react";
import { dashboardBlogsData } from "../../assets/blogsData";
import BlogTableItem from "../../components/adimin/BlogTableItem";
import { FileText } from "lucide-react";

function BlogLists() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    setBlogs(dashboardBlogsData.recentBlogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="p-6 bg-secondary">
      {/* Header Section */}
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <FileText className="w-7 h-7 text-primary" /> {/* 👈 Icon */}
          <h1 className="text-2xl font-bold text-gray-800">All Blogs</h1>
        </div>
        <p className="text-gray-600 mt-1">
          Here’s a list of all your blogs. You can edit or delete them anytime.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[250px]">
            {/* Table Head */}
            <thead className="hidden md:table-header-group">
              <tr className="bg-gray-50 border-b border-gray-200 text-gray-700">
                <th className="py-3 px-4 text-sm font-semibold">#</th>
                <th className="py-3 px-4 text-sm font-semibold">Blog Title</th>
                <th className="py-3 px-4 text-sm font-semibold">Date</th>
                <th className="py-3 px-4 text-sm font-semibold">Status</th>
                <th className="py-3 px-4 text-sm font-semibold text-center">
                  Action
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {blogs.map((blog, index) => (
                <BlogTableItem
                  key={blog.id}
                  fetchBlogs={fetchBlogs}
                  index={index + 1}
                  blog={blog}
                />
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
}

export default BlogLists;
