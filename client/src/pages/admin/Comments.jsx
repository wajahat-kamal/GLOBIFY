import React, { useEffect, useState } from "react";
import { commentsData } from "../../assets/blogsData";

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
    <div>
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Comments</h1>
        <div>
          <button
            className={`border border-gray-700 rounded-full text-xs py-1.5 px-3 ${
              filter === "Approved" ? "text-primary" : "text-gray-700"
            }`}
          >
            Approved
          </button>
          <button
            className={`border border-primary rounded-full text-xs py-1.5 px-3 ${
              filter === "Not Approved" ? "text-primary" : "text-gray-700"
            }`}
          >
            Not Approved
          </button>
        </div>
      </div>

      {/* comments */}
      <div></div>
    </div>
  );
}

export default Comments;
