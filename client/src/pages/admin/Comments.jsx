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

  const filteredComments = comments.filter((c) =>
    filter === "Approved" ? c.isApproved : !c.isApproved
  );

  return (
    <div className="p-4 bg-adminBG min-h-screen md:m-4 m-0 rounded-lg shadow-sm">
      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-primary" />
          <h1 className="text-xl font-semibold text-gray-800">Comments</h1>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setFilter("Approved")}
            className={`rounded-full border text-xs py-1.5 px-4 transition-colors duration-200
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
            className={`rounded-full border text-xs py-1.5 px-4 transition-colors duration-200
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
        <div className="space-y-2">
          {filteredComments.map((comment) => (
            <div key={comment._id}>
              <CommentTableItem comment={comment} fetchComments={fetchComments} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10 text-sm italic">
          No {filter.toLowerCase()} comments to display.
        </p>
      )}
    </div>
  );
}

export default Comments;
