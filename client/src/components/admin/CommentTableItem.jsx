import React from "react";
import { Trash2 } from "lucide-react";
import { UseAppContext } from "../../context/AppContext";

function CommentTableItem({ comment, fetchComments }) {
  const commentDate = new Date(comment.createdAt);

  const { axios } = UseAppContext();

  const deleteComment = async () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this comment."
    );
    if (!confirm) return;
    try {
      const { data } = await axios.post("/api/admin/delete-comment", {
        id: comment._id,
      });
      if (data.success) {
        toast.success(data.message);
        fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const approveComment = async () => {
    try {
      const { data } = await axios.post("/api/admin/approve-comment", {
        id: comment._id,
      });
      if (data.success) {
        toast.success(data.message);
        fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl py-3 px-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4 md:flex-row md:justify-between md:items-start">
      {/* Left: Blog Title + Name + Comment */}
      <div className="flex-1 space-y-1">
        {/* Blog Title */}
        <h2 className="text-base md:text-lg font-semibold text-gray-800">
          Blog:{" "}
          <span className="text-primary font-bold">
            {comment.blog?.title || "Untitled Blog"}
          </span>
        </h2>

        {/* Commenter Name */}
        <h3 className="text-sm font-medium text-gray-800">
          Name: {comment.name}
        </h3>

        {/* Comment Content */}
        <p className="text-sm font-medium text-gray-800 leading-relaxed">
          Content: {comment.content}
        </p>
      </div>

      {/* Right: Status + Delete + Date */}
      <div className="flex flex-col items-end text-right gap-3 min-w-[140px]">
        {/* Status & Delete */}
        <div className="flex items-center gap-2">
          <span
            className={`text-xs font-medium px-3 py-1 rounded-full border 
              ${
                comment.isApproved
                  ? "bg-green-50 text-green-600 border-green-200"
                  : "bg-yellow-50 text-yellow-600 border-yellow-200"
              }`}
          >
            {comment.isApproved ? "Approved" : "Not approved"}
          </span>

          <button
            className="p-1.5 rounded-full border border-red-200 text-red-500 
                       hover:bg-red-100 hover:shadow-sm transition"
            // onClick={deleteComment}
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        {/* Date */}
        <p className="text-xs text-gray-400">
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
