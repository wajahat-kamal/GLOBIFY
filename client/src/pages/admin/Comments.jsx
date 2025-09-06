import React, { useEffect, useState } from "react";
import { commentsData } from "../../assets/blogsData";

function Comments() {

  const [comments, setComments] = useState([])
  const [filter, setFilter] = useState([])

  const fetchComments = async () => {
    setComments(commentsData)
  }

  useEffect(() => {
    fetchComments()
  }, [])
  

  return (
    <div>

    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Comments</h1>
      <p className="text-gray-600">
        Manage all the comments on your blog posts from this page.
      </p>
    </div>
    </div>
  );
}

export default Comments;
