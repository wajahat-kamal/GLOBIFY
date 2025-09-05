import React from "react";
import { FileText, MessageSquare, FileMinus } from "lucide-react";

function Dashboard() {
  return (
    <div className="p-6 w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Blogs Card */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 flex items-center gap-4">
          <div className="p-3 rounded-full bg-gray-100 text-blue-500 flex items-center justify-center">
            <FileText className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">12</h1>
            <p className="text-gray-500">Blogs</p>
          </div>
        </div>

        {/* Comments Card */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 flex items-center gap-4">
          <div className="p-3 rounded-full bg-gray-100 text-green-500 flex items-center justify-center">
            <MessageSquare className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">6</h1>
            <p className="text-gray-500">Comments</p>
          </div>
        </div>

        {/* Drafts Card */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 flex items-center gap-4">
          <div className="p-3 rounded-full bg-gray-100 text-orange-500 flex items-center justify-center">
            <FileMinus className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">0</h1>
            <p className="text-gray-500">Drafts</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
