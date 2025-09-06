import React from "react";
import { Trash2 } from "lucide-react";

function CommentTableItem({ comment }) {
  const commentDate = new Date(comment.createdAt);

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
      {/* Header: Name + Status + Delete */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-800">{comment.name}</h3>

        <div className="flex items-center gap-3">
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
              comment.isApproved
                ? "bg-green-50 text-green-600 border-green-200"
                : "bg-yellow-50 text-yellow-600 border-yellow-200"
            }`}
          >
            {comment.isApproved ? "Approved" : "Pending"}
          </span>

          <button className="p-2 rounded-full border border-red-200 text-red-500 hover:bg-red-100 hover:shadow-sm transition">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <p className="text-gray-700 text-sm mt-1 leading-relaxed">
        {comment.content}
      </p>

      {/* Footer: Date */}
      <p className="text-xs text-gray-400 mt-2">
        {commentDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
    </div>
  );
}

export default CommentTableItem;
