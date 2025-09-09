import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogsData, commentsData } from "../assets/blogsData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Moment from "moment";
import Avatar from "../assets/user-avatar.png"; 
import Loader from "../components/Loader";

function Blog() {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);

  const [name, setName] = useState("");
  const [content, setContent] = useState("");

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
    <div className="min-h-screen text-gray-900">
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
          <span className="px-3 py-1 bg-sky-100 text-sky-600 rounded-full md:text-sm text-[11px] font-medium shadow-md">
            {data.category}
          </span>
          <span>•</span>
          <span className="text-center px-4 py-1.5 bg-sky-100 text-sky-600 md:text-sm text-[11px] font-medium rounded-full shadow-md">
            Published on {Moment(data.createdAt).format("MMMM Do, YYYY")}
          </span>
          <span>•</span>
          <span className="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-center md:text-sm text-[11px] shadow-md">
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

        {/* Comment Section */}
        <div>
          {/* Comments List */}
          <div className="mt-12 max-w-2xl">
            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-3">
              Comments{" "}
              <span className="text-gray-500 text-lg">({comments.length})</span>
            </h2>

            <div className="mt-6 space-y-3">
              {comments.map((comment, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-secondary shadow-sm border border-gray-100 hover:shadow-md transition"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={Avatar}
                        alt="User avatar"
                        className="w-8 h-8 rounded-full border border-gray-200 object-cover"
                      />
                      <h3 className="text-base font-semibold text-gray-800">
                        {comment.name}
                      </h3>
                    </div>

                    <span className="text-sm px-3 py-1 bg-sky-100 text-sky-600 rounded-full ">
                      {Moment(comment.createdAt).format("MMMM Do, YYYY")}
                    </span>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    {comment.content}
                  </p>
                </div>
              ))}

              {/* No Comments */}
              {comments.length === 0 && (
                <p className="text-gray-500 text-center text-sm italic">
                  No comments yet. Be the first to share your thoughts!
                </p>
              )}
            </div>
          </div>

          {/* Add Comment */}
          <div className="mt-12 max-w-2xl bg-secondary p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Add Your Comment
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-gray-700 placeholder-gray-400 transition"
              />
              <textarea
                onChange={(e) => setContent(e.target.value)}
                value={content}
                placeholder="Add your comment"
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-gray-700 placeholder-gray-400 transition resize-none"
              />
              <button
                type="submit"
                className="w-full  px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition shadow-sm"
              >
                Add Comment
              </button>
            </form>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  ) : <Loader />
}

export default Blog;