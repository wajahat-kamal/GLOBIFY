import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogsData, commentsData } from "../assets/blogsData";
import Navbar from "../components/Navbar";
import Moment from "moment";

export default function Blog() {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);

  const fetchBlogData = () => {
    const blog = blogsData.find((item) => item._id === id);
    setData(blog);
  };

  const fetchComments = () => {
    setComments(commentsData);
  };

  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, [id]);

  return data ? (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Blog Section */}
      <article className="max-w-4xl mt-10 mx-auto px-6 py-12">
        {/* Blog Image */}
        <div className="mb-8">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Meta Info */}
        <div className="mb-6 text-sm text-gray-500 flex items-center gap-3">
          <span className="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-xs font-medium">
            {data.category}
          </span>
          <span>•</span>
          <span className="text-center px-4 py-1.5 bg-sky-100 text-sky-600 md:text-sm text-[11px] font-medium rounded-full shadow-sm">
            Published on {Moment(data.createdAt).format("MMMM Do, YYYY")}
          </span>
          <span>•</span>
          <span className="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-center md:text-sm text-[11px]">
            By {data.author}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          {data.title}
        </h1>

        {/* Description / Body */}
        <p className="text-lg leading-relaxed text-gray-700">
          {data.description}
        </p>

        <div className="mt-10">
          <h1>Comments ({comments.length})</h1>
          <div className="mt-5">
          {comments.map((comment, index) => (
            <div key={index}>
              <div className="flex items-center gap-2">
              <h1>{comment.name}</h1>
              <p>{Moment(comment.createdAt).format("MMMM Do, YYYY")}</p>
              </div>
              <p>{comment.content}</p>
            </div>
          ))}
          </div>
        </div>

      </article>
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-gray-500 text-lg animate-pulse">Loading...</p>
    </div>
  );
}
