import React, { useEffect, useState } from "react";
import { FileText, MessageSquare, FileMinus, X } from "lucide-react";
import { dashboardDataBlogs } from "../../assets/blogsData";
import BlogTableItem from "../../components/adimin/BlogTableItem";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });

  const fetchDashboardData = async () => {
    setDashboardData(dashboardDataBlogs);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div className="px-4 py-0 w-full">
      {/* Stats Cards */}
      <div className="flex flex-col md:flex-row flex-wrap items-start justify-start gap-6">
        {/* Blogs Card */}
        <div className="bg-white min-w-55 rounded-2xl shadow-md hover:shadow-lg transition-all p-6 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-blue-100 text-blue-500 flex items-center justify-center">
            <FileText className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {dashboardData.blogs}
            </h1>
            <p className="text-gray-500 text-sm">Blogs</p>
          </div>
        </div>

        {/* Comments Card */}
        <div className="bg-white min-w-55 rounded-2xl shadow-md hover:shadow-lg transition-all p-6 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-green-100 text-green-500 flex items-center justify-center">
            <MessageSquare className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {dashboardData.comments}
            </h1>
            <p className="text-gray-500 text-sm">Comments</p>
          </div>
        </div>

        {/* Drafts Card */}
        <div className="bg-white min-w-55 rounded-2xl shadow-md hover:shadow-lg transition-all p-6 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center">
            <FileMinus className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {dashboardData.drafts}
            </h1>
            <p className="text-gray-500 text-sm">Drafts</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 mt-6">
        {/* Heading */}
        <h1 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <FileText className="h-5 w-5 text-primary" />
          Latest Blogs
        </h1>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
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
              {dashboardData.recentBlogs.map((blog, index) => (
                <BlogTableItem
                  key={blog.id}
                  fetchBlogs={fetchDashboardData}
                  index={index + 1}
                  blog={blog}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
