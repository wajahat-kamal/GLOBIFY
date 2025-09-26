import React, { useEffect, useState } from "react";
import { FileText, MessageSquare, FileMinus } from "lucide-react";
import BlogTableItem from "../../components/admin/BlogTableItem";
import { UseAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });

  const { axios } = UseAppContext();

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get("/api/admin/dashboard");
      data.success
        ? setDashboardData(data.dashboardData)
        : toast.error(data.error);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="px-3 py-2 w-full">
      {/* Stats Cards */}
      <div className="flex flex-col md:flex-row flex-wrap items-start justify-start gap-4">
        {/* Blogs Card */}
        <div className="bg-adminBG min-w-44 rounded-xl shadow p-4 flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-blue-100 text-blue-500 flex items-center justify-center">
            <FileText className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">
              {dashboardData.blogs}
            </h1>
            <p className="text-gray-500 text-xs">Blogs</p>
          </div>
        </div>

        {/* Comments Card */}
        <div className="bg-adminBG min-w-44 rounded-xl shadow p-4 flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-green-100 text-green-500 flex items-center justify-center">
            <MessageSquare className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">
              {dashboardData.comments}
            </h1>
            <p className="text-gray-500 text-xs">Comments</p>
          </div>
        </div>

        {/* Drafts Card */}
        <div className="bg-adminBG min-w-44 rounded-xl shadow p-4 flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-orange-100 text-orange-500 flex items-center justify-center">
            <FileMinus className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">
              {dashboardData.drafts}
            </h1>
            <p className="text-gray-500 text-xs">Drafts</p>
          </div>
        </div>
      </div>

      <div className="bg-adminBG rounded-xl shadow p-4 mt-5">
        {/* Heading */}
        <h1 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <FileText className="h-4 w-4 text-primary" />
          Latest Blogs
        </h1>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[200px]">
            {/* Table Head */}
            <thead className="hidden md:table-header-group">
              <tr className="bg-gray-50 border-b border-gray-200 text-gray-700">
                <th className="py-2 px-3 text-xs font-semibold">#</th>
                <th className="py-2 px-3 text-xs font-semibold">Blog Title</th>
                <th className="py-2 px-3 text-xs font-semibold">Date</th>
                <th className="py-2 px-3 text-xs font-semibold">Status</th>
                <th className="py-2 px-3 text-xs font-semibold text-center">
                  Action
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {dashboardData.recentBlogs.map((blog, index) => (
                <BlogTableItem
                  key={blog._id}
                  fetchBlogs={fetchBlogs}
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
