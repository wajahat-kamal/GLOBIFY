import React, { useEffect, useState } from "react";
import { FileText, MessageSquare, FileMinus, X } from "lucide-react";
import { dashboardDataBlogs } from "../../assets/blogsData";

function Dashboard() {
  
  const [dashboardData, setDashboardData] = useState({
     blogs: 0,
     comments: 0,
     drafts: 0,
     recentBlogs: []
  })

  const fetchDashboardData = async () => {
    setDashboardData(dashboardDataBlogs)
  }

  useEffect(() => {
    fetchDashboardData()
  }, [])
  
  

  return (
    <div className="p-4 sm:p-6 w-full">
      {/* Stats Cards */}
      <div className="flex flex-col md:flex-row flex-wrap items-start justify-start gap-6">
        {/* Blogs Card */}
        <div className="bg-white min-w-55 rounded-2xl shadow-md hover:shadow-lg transition-all p-6 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-blue-100 text-blue-500 flex items-center justify-center">
            <FileText className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{dashboardData.blogs}</h1>
            <p className="text-gray-500 text-sm">Blogs</p>
          </div>
        </div>

        {/* Comments Card */}
        <div className="bg-white min-w-55 rounded-2xl shadow-md hover:shadow-lg transition-all p-6 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-green-100 text-green-500 flex items-center justify-center">
            <MessageSquare className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{dashboardData.comments}</h1>
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
        <h1 className="text-xl font-bold text-gray-800 mb-4">Latest Blogs</h1>

        {/* Desktop / Tablet Table */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="py-3 px-4 text-sm font-semibold">#</th>
                <th className="py-3 px-4 text-sm font-semibold">Blog Title</th>
                <th className="py-3 px-4 text-sm font-semibold">Date</th>
                <th className="py-3 px-4 text-sm font-semibold">Status</th>
                <th className="py-3 px-4 text-sm font-semibold text-center">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {dashboardData.recentBlogs.map((blog, index) => (
                <tr
                  key={blog.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-4 text-gray-600">{index + 1}</td>
                  <td className="py-3 px-4 text-gray-800">{blog.title}</td>
                  <td className="py-3 px-4 text-gray-600">{blog.date}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        blog.status === "Published"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {blog.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 flex items-center justify-center gap-2">
                    {blog.status === "Published" ? (
                      <button className="px-3 py-1 text-sm bg-yellow-100 text-yellow-600 rounded-md hover:bg-yellow-200 transition">
                        Unpublish
                      </button>
                    ) : (
                      <button className="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-md hover:bg-green-200 transition">
                        Publish
                      </button>
                    )}
                    <button className="p-2 text-red-500 hover:bg-red-100 rounded-full transition">
                      <X className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="sm:hidden space-y-4">
          {dashboardData.recentBlogs.map((blog, index) => (
            <div
              key={blog.id}
              className="border rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-gray-600">
                  #{index + 1}
                </span>
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                    blog.status === "Published"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {blog.status}
                </span>
              </div>

              <h2 className="mt-2 font-semibold text-gray-900 text-base">
                {blog.title}
              </h2>

              <p className="text-gray-500 text-sm mt-1">{blog.date}</p>

              <div className="flex gap-2 mt-3">
                {blog.status === "Published" ? (
                  <button className="px-3 py-1 text-sm bg-yellow-100 text-yellow-600 rounded-md hover:bg-yellow-200 transition">
                    Unpublish
                  </button>
                ) : (
                  <button className="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-md hover:bg-green-200 transition">
                    Publish
                  </button>
                )}
                <button className="p-2 text-red-500 hover:bg-red-100 rounded-full transition">
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
