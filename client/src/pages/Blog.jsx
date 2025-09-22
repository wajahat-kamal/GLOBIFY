import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Moment from "moment";
import toast from "react-hot-toast";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { UseAppContext } from "../context/AppContext";

function Blog() {
  const { id } = useParams();
  const { axios } = UseAppContext();

  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  /** ---------- Data Fetchers ---------- */
  const fetchBlog = async () => {
    try {
      const { data } = await axios.get(`/api/blog/${id}`);
      if (data.success) setBlog(data.blog);
      else toast.error(data.message);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const fetchComments = async () => {
    try {
      const { data } = await axios.post("/api/blog/comments", { blogId: id });
      if (data.success) setComments(data.comments);
      else toast.error(data.message);
    } catch (err) {
      toast.error(err.message);
    }
  };

  /** ---------- Handlers ---------- */
  const addComment = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/blog/add-comment", {
        blog: id,
        name,
        content,
      });

      if (data.success) {
        toast.success(data.message);
        setName("");
        setContent("");
        fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  /** ---------- Initial Load ---------- */
  useEffect(() => {
    fetchBlog();
    fetchComments();
  }, [id]);

  if (!blog) return <Loader />;

  /** ---------- JSX ---------- */
  return (
    <div
      className="min-h-screen flex flex-col bg-[#EEF2FE] bg-cover bg-center bg-no-repeat text-gray-900"
      style={{ backgroundImage: "url('('../assets/main-bg.jpg')" }}
    >
      <Navbar />

      <article className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-8">
        {/* --- Blog Image --- */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-lg mb-10"
        />

        {/* --- Meta Info --- */}
        <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-600 mb-6">
          <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full font-medium shadow-sm">
            {blog.category}
          </span>
          <span>•</span>
          <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full font-medium shadow-sm">
            {Moment(blog.createdAt).format("MMMM Do, YYYY")}
          </span>
        </div>

        {/* --- Title & Body --- */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
          {blog.title}
        </h1>
        <p
          className="text-lg leading-relaxed text-gray-700 mb-12"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        />

        {/* --- Comments Section --- */}
        <section className="max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-3">
            Comments{" "}
            <span className="text-gray-500 text-lg">({comments.length})</span>
          </h2>

          <div className="mt-6 space-y-4">
            {comments.length ? (
              comments.map((c, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-secondary shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-semibold text-gray-800">
                      {c.name}
                    </h3>
                    <span className="text-xs md:text-sm px-3 py-1 bg-sky-100 text-sky-700 rounded-full">
                      {Moment(c.createdAt).format("MMMM Do, YYYY")}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{c.content}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center text-sm italic">
                No comments yet. Be the first to share your thoughts!
              </p>
            )}
          </div>

          {/* --- Add Comment Form --- */}
          <div className="mt-12 bg-secondary p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Add Your Comment
            </h3>

            <form className="space-y-5" onSubmit={addComment}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-400 focus:border-sky-400 outline-none text-gray-700 placeholder-gray-400 transition"
              />
              <textarea
                rows="4"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your comment..."
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
  );
}

export default Blog;
