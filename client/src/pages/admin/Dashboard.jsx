import { MessageSquare } from "lucide-react";
import React from "react";

function Dashboard() {
  return (
    <div className="px-6 py-3 w-full">
      <div className="flex flex-col md:flex-row items-center justify-start">
        <div className="bg-white px-14 py-10 flex flex-row items-center justify-center">
          {/* Lucide-react icon */}
          <div>
            <h1>12</h1>
            <p>Blogs</p>
          </div>
        </div>
        <div className="bg-white p-6 flex flex-row items-center justify-center">
          {/* Lucide-react icon */}
          <div>
            <h1>6</h1>
            <p>Comments</p>
          </div>
        </div>
        <div className="bg-white p-6 flex flex-row items-center justify-center">
          {/* Lucide-react icon */}
          <div>
            <h1>0</h1>
            <p>Drafts</p>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Dashboard;
