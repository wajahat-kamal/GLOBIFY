import React from "react";
import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { UseAppContext } from "../../context/AppContext";

function CommentTableItem({ comment, fetchComments }) {
  const commentDate = new Date(comment.createdAt);
  const { axios } = UseAppContext();

  const deleteComment = async () => {
    if (!window.confirm("Are you sure you want to delete this comment?"))
      return;
    try {
      const { data } = await axios.post("/api/admin/delete-comment", {
        id: comment._id,
      });
      data.success
        ? (toast.success(data.message), fetchComments())
        : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const approveComment = async () => {
    if (comment.isApproved) return;
    try {
      const { data } = await axios.post("/api/admin/approve-comment", {
        id: comment._id,
      });
      data.success
        ? (toast.success(data.message), fetchComments())
        : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md
                    transition-all duration-300 flex flex-col gap-4 md:flex-row md:justify-between md:items-start"
    >
      {/* ---------- Left Section: Blog, Name & Comment ---------- */}
      <div className="flex-1 space-y-2">
        <h2 className="text-base md:text-lg font-semibold text-gray-900">
          Blog:&nbsp;
          <span className="text-primary font-bold">
            {comment.blog?.title || "Untitled Blog"}
          </span>
        </h2>

        <div className="text-sm text-gray-700">
          <p>
            <span className="font-medium text-gray-800">Name:</span>{" "}
            {comment.name}
          </p>
          <p className="leading-relaxed mt-1">
            <span className="font-medium text-gray-800">Comment:</span>{" "}
            {comment.content}
          </p>
        </div>
      </div>

      {/* ---------- Right Section: Status + Delete + Date ---------- */}
      <div className="flex flex-col items-end text-right gap-3 min-w-[140px]">
        <div className="flex items-center gap-2">
          {/* Status / Approve Button */}
          <button
            onClick={approveComment}
            disabled={comment.isApproved}
            className={`text-xs font-medium px-3 py-1 rounded-full border transition
              ${
                comment.isApproved
                  ? "bg-green-50 text-green-600 border-green-200 cursor-default"
                  : "bg-yellow-50 text-yellow-600 border-yellow-200 hover:bg-yellow-100"
              }`}
          >
            {comment.isApproved ? "Approved" : "Not Approved"}
          </button>

          {/* Delete Button */}
          <button
            onClick={deleteComment}
            className="p-1.5 rounded-full border border-red-200 text-red-500
                       hover:bg-red-100 hover:shadow-sm transition"
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
