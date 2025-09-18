import React, { useEffect, useState } from "react";
import { MessageSquare } from "lucide-react";
import CommentTableItem from "../../components/admin/CommentTableItem";
import toast from "react-hot-toast";
import { UseAppContext } from "../../context/AppContext";

function Comments() {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState("Not Approved");

  const { axios } = UseAppContext();

  const fetchComments = async () => {
    try {
      const { data } = await axios.get("/api/admin/comments");
      data.success ? setComments(data.comments) : toast.error(data.error);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  // Filter by approval status
  const filteredComments = comments.filter((c) =>
    filter === "Approved" ? c.isApproved : !c.isApproved
  );

  return (
    <div className="p-6 bg-adminBG min-h-screen md:m-5 m-0 rounded-xl shadow-sm">
      {/* Header Section */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-3">
          <MessageSquare className="w-7 h-7 text-primary" />
          <h1 className="text-2xl font-bold text-gray-800">Comments</h1>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => setFilter("Approved")}
            className={`rounded-full border text-xs py-2 px-5 transition-colors duration-200
            ${
              filter === "Approved"
                ? "border-primary bg-primary/10 text-primary font-medium"
                : "border-gray-300 text-gray-600 hover:bg-gray-100"
            }`}
          >
            Approved
          </button>

          <button
            onClick={() => setFilter("Not Approved")}
            className={`rounded-full border text-xs py-2 px-5 transition-colors duration-200
            ${
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
      {filteredComments.length > 0 ? (
        <div className="space-y-3">
          {filteredComments.map((comment) => (
            <div
              key={comment._id}
              // className="p-5 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition duration-200"
            >
              {/* Individual Comment Item */}
              <CommentTableItem
                comment={comment}
                fetchComments={fetchComments}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-12 text-sm italic">
          No {filter.toLowerCase()} comments to display.
        </p>
      )}
    </div>
  );
}

export default Comments;
