import React, { useEffect, useState } from "react";
import { dashboardBlogsData } from "../../assets/blogsData";
import BlogTableItem from "../../components/adimin/BlogTableItem";

function BlogLists() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    setBlogs(dashboardBlogsData.recentBlogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">All Blog Lists</h1>
        <p className="text-gray-600 mt-1">
          Here’s a list of all your blogs. You can edit or delete them anytime.
        </p>
      </div>

      {/* Table Card */}
      <div className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[500px]">
            {/* Table Head */}
            <thead className="hidden md:table-header-group">
              <tr className="bg-gray-100 border-b border-gray-200 text-gray-700">
                <th className="py-3 px-4 text-sm font-semibold w-12">#</th>
                <th className="py-3 px-4 text-sm font-semibold w-1/2">
                  Blog Title
                </th>
                <th className="py-3 px-4 text-sm font-semibold">Date</th>
                <th className="py-3 px-4 text-sm font-semibold">Status</th>
                <th className="py-3 px-4 text-sm font-semibold text-center">
                  Action
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-100">
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

        {/* Mobile Scroll Hint */}
        <div className="md:hidden text-xs text-gray-500 p-3 text-center border-t">
          Swipe → to see more
        </div>
      </div>
    </div>
  );
}

export default BlogLists;
