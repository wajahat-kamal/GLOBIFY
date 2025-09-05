import React from "react";
import { FileText, MessageSquare, FileMinus, X } from "lucide-react";

function Dashboard() {
  return (
    <div className="p-4 sm:p-6 w-full">
      {/* Stats Cards */}
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-start gap-6">
        
        {/* Blogs Card */}
        <div className="bg-white min-w-55 rounded-2xl shadow-md hover:shadow-lg transition-all p-6 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-blue-100 text-blue-500 flex items-center justify-center">
            <FileText className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">12</h1>
            <p className="text-gray-500 text-sm">Blogs</p>
          </div>
        </div>

        {/* Comments Card */}
        <div className="bg-white min-w-55 rounded-2xl shadow-md hover:shadow-lg transition-all p-6 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-green-100 text-green-500 flex items-center justify-center">
            <MessageSquare className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">6</h1>
            <p className="text-gray-500 text-sm">Comments</p>
          </div>
        </div>

        {/* Drafts Card */}
        <div className="bg-white min-w-55 rounded-2xl shadow-md hover:shadow-lg transition-all p-6 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center">
            <FileMinus className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">0</h1>
            <p className="text-gray-500 text-sm">Drafts</p>
          </div>
        </div>
      </div>

      {/* Latest Blogs Table */}
      <div className="bg-white rounded-2xl shadow-md p-6 mt-6">
        <h1 className="text-xl font-bold text-gray-800 mb-4">Latest Blogs</h1>

        <div className="overflow-x-auto">
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
              {/* Row 1 */}
              <tr className="border-t hover:bg-gray-50 transition">
                <td className="py-3 px-4 text-gray-600">1</td>
                <td className="py-3 px-4 text-gray-800">
                  The Rise of Artificial Intelligence in Modern Technology
                </td>
                <td className="py-3 px-4 text-gray-600">Wed May 28 2025</td>
                <td className="py-3 px-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-600">
                    Published
                  </span>
                </td>
                <td className="py-3 px-4 flex items-center justify-center gap-2">
                  <button className="px-3 py-1 text-sm bg-yellow-100 text-yellow-600 rounded-md hover:bg-yellow-200 transition">
                    Unpublish
                  </button>
                  <button className="p-2 text-red-500 hover:bg-red-100 rounded-full transition">
                    <X className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
