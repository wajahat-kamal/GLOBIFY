import React, { useEffect, useState } from "react";
import { commentsData } from "../../assets/blogsData";
import { MessageSquare } from "lucide-react";
import CommentTableItem from "../../components/adimin/CommentTableItem";

function Comments() {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState("Not Approved");

  const fetchComments = async () => {
    setComments(commentsData);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  // filter comments
  const filteredComments = comments.filter((c) =>
    filter === "Approved" ? c.isApproved : !c.isApproved
  );

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
        {filteredComments.map((comment) => (
          <CommentTableItem key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default Comments;
