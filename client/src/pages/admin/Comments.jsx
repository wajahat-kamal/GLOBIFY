import React, { useEffect, useState } from "react";
import { commentsData } from "../../assets/blogsData";
import { MessageSquare, Trash2 } from "lucide-react";

function Comments() {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState("Not Approved");

  const fetchComments = async () => {
    setComments(commentsData);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="p-6 bg-secondary min-h-screen md:m-5 m-0 rounded-xl">
      {/* Header Section */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-7 h-7 text-primary" />
          <h1 className="text-2xl font-bold text-gray-800">Comments</h1>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => setFilter("Approved")}
            className={`rounded-full border text-xs py-1.5 px-4 transition ${
              filter === "Approved"
                ? "border-primary bg-primary/10 text-primary font-medium"
                : "border-gray-500 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Approved
          </button>
          <button
            onClick={() => setFilter("Not Approved")}
            className={`rounded-full border text-xs py-1.5 px-4 transition ${
              filter === "Not Approved"
                ? "border-primary bg-primary/10 text-primary font-medium"
                : "border-gray-500 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Not Approved
          </button>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((comment) => {
          const commentDate = new Date(comment.createdAt);

          return (
            <div
              key={comment.id}
              className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              {/* Header: Name + Status */}
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-800">
                  {comment.name}
                </h3>

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
        })}
      </div>
    </div>
  );
}

export default Comments;
