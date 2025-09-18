import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Moment from "moment";
import Loader from "../components/Loader";
import { UseAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

function Blog() {
  const { id } = useParams();
  const { axios } = UseAppContext();

  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const fetchBlogData = async () => {
    try {
      const { data } = await axios.get(`/api/blog/${id}`);
      data.success ? setData(data.blog) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const fetchComments = async () => {
    try {
      const { data } = await axios.post("/api/blog/comments", { blogId: id });
      data.success ? setComments(data.comments) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const addComment = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/blog/add-comment", {
        blog: id,
        content,
        name,
      });

      if (data.success) {
        toast.success(data.message);
        setName("");
        setContent("");
        fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, [id]);

  return data ? (
    <div className="min-h-screen flex flex-col text-gray-900 ">
      <Navbar />

      <article className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-8">
        {/* Blog Image */}
        <div className="mb-10">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-600 mb-6">
          <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full font-medium shadow-sm">
            {data.category}
          </span>
          <span>•</span>
          <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full font-medium shadow-sm">
            {Moment(data.createdAt).format("MMMM Do, YYYY")}
          </span>
          <span>•</span>
          <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full font-medium shadow-sm">
            By {data.author}
          </span>
        </div>

        {/* Title & Description */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
          {data.title}
        </h1>
        <p className="text-lg leading-relaxed text-gray-700 mb-12" dangerouslySetInnerHTML={ {__html: data.description}}>
        </p>

        {/* Comments */}
        <section className="max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-3">
            Comments{" "}
            <span className="text-gray-500 text-lg">({comments.length})</span>
          </h2>

          <div className="mt-6 space-y-4">
            {comments.map((comment, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-semibold text-gray-800">
                    {comment.name}
                  </h3>
                  <span className="text-xs md:text-sm px-3 py-1 bg-sky-100 text-sky-700 rounded-full">
                    {Moment(comment.createdAt).format("MMMM Do, YYYY")}
                  </span>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  {comment.content}
                </p>
              </div>
            ))}

            {comments.length === 0 && (
              <p className="text-gray-500 text-center text-sm italic">
                No comments yet. Be the first to share your thoughts!
              </p>
            )}
          </div>

          {/* Add Comment Form */}
          <div className="mt-12 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Add Your Comment
            </h3>

            <form className="space-y-5" onSubmit={addComment}>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-400 focus:border-sky-400 outline-none text-gray-700 placeholder-gray-400 transition"
              />
              <textarea
                onChange={(e) => setContent(e.target.value)}
                value={content}
                placeholder="Write your comment..."
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-400 focus:border-sky-400 outline-none text-gray-700 placeholder-gray-400 transition resize-none"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-sky-600 text-white font-medium shadow hover:bg-sky-700 transition-colors duration-300"
              >
                Add Comment
              </button>
            </form>
          </div>
        </section>
      </article>

      <Footer />
    </div>
  ) : (
    <Loader />
  );
}

export default Blog;
