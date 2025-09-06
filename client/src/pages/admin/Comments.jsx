import React, { useEffect, useState } from "react";
import { commentsData } from "../../assets/blogsData";
import { MessageSquare } from "lucide-react";

function Comments() {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState("Not Approved");

  const fetchComments = async () => {
    setComments(commentsData);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  // Filtered comments
  const filteredComments = comments.filter(
    (c) => (filter === "Approved" ? c.isApproved : !c.isApproved)
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
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
                : "border-gray-300 text-gray-600 hover:bg-gray-100"
            }`}
          >
            Not Approved
          </button>
        </div>
      </div>

      {/* Comments List */}
      {/* <div className="space-y-4">
        {filteredComments.length > 0 ? (
          filteredComments.map((comment) => (
            <div
              key={comment.id}
              className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">
                    {comment.name}
                  </h3>
                  <p className="text-xs text-gray-500">{comment.email}</p>
                </div>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    comment.isApproved
                      ? "bg-green-50 text-green-600 border border-green-200"
                      : "bg-yellow-50 text-yellow-600 border border-yellow-200"
                  }`}
                >
                  {comment.isApproved ? "Approved" : "Pending"}
                </span>
              </div>
              <p className="text-gray-700 text-sm mt-3">{comment.message}</p>
              <p className="text-xs text-gray-400 mt-2">
                {new Date(comment.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm text-center py-6">
            No comments found for this filter.
          </p>
        )}
      </div> */}

    </div>
  );
}

export default Comments;
