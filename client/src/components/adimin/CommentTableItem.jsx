import React from "react";
import { Trash2 } from "lucide-react";

function CommentTableItem({ comment }) {
  const commentDate = new Date(comment.createdAt);

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition flex flex-col md:flex-row md:justify-between gap-4">
      {/* Left: Name + Content */}
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-gray-800">{comment.name}</h3>
        <p className="text-gray-700 text-sm mt-1 leading-relaxed">
          {comment.content}
        </p>
      </div>

      {/* Right: Status + Delete + Date */}
      <div className="flex flex-col justify-between items-end text-right min-w-[120px]">
        {/* Top: Status + Delete */}
        <div className="flex items-center gap-2">
          <span
            className={`text-xs font-medium px-2.5 py-1.5 rounded-full border ${
              comment.isApproved
                ? "bg-green-50 text-green-600 border-green-200"
                : "bg-yellow-50 text-yellow-600 border-yellow-200"
            }`}
          >
            {comment.isApproved ? "Approved" : "Pending"}
          </span>

          <button className="p-1.5 rounded-full border border-red-200 text-red-500 hover:bg-red-100 hover:shadow-sm transition">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom: Date (always at bottom) */}
        <p className="text-xs text-gray-400 mt-2">
          {commentDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}

export default CommentTableItem;
