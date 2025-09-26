import { X } from "lucide-react";
import React from "react";
import { UseAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

function BlogTableItem({ blog, fetchBlogs, index }) {
  const { title, createdAt, isPublished } = blog;
  const BlogDate = new Date(createdAt);
  const { axios } = UseAppContext();

  const deleteBlog = async () => {
    if (!window.confirm("Are you sure you want to delete this blog.")) return;
    try {
      const { data } = await axios.post("/api/blog/delete", { id: blog._id });
      data.success ? (toast.success(data.message), fetchBlogs()) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const togglePublish = async () => {
    try {
      const { data } = await axios.post("/api/blog/toggle-publish", { id: blog._id });
      data.success ? (toast.success(data.message), fetchBlogs()) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const date = BlogDate.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

  return (
    <tr className="border-b border-gray-400 hover:bg-gray-50 transition-colors">
      <th className="px-2 py-2 text-gray-600 text-xs font-semibold w-8 align-top">{index}</th>
      <td className="px-2 py-2 text-gray-800 text-sm font-medium">
        <div className="truncate max-w-[220px] sm:max-w-[350px]">{title}</div>
        <div className="flex flex-wrap items-center gap-2 mt-1 sm:hidden">
          <span className="text-gray-500 text-[10px]">{date}</span>
          <span className={`px-1.5 py-0.5 text-[10px] font-medium rounded-full border ${
              isPublished ? "bg-green-50 text-green-600 border-green-200" : "bg-yellow-50 text-yellow-600 border-yellow-200"
            }`}>
            {isPublished ? "Published" : "Unpublished"}
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={togglePublish}
              className={`px-1.5 py-0.5 text-[10px] font-semibold rounded border transition ${
                isPublished
                  ? "bg-yellow-50 text-yellow-600 border-yellow-200 hover:bg-yellow-100"
                  : "bg-green-50 text-green-600 border-green-200 hover:bg-green-100"
              }`}
            >
              {isPublished ? "Unpublish" : "Publish"}
            </button>
            <button
              onClick={deleteBlog}
              className="p-1 rounded-full border border-red-300 text-red-500 hover:bg-red-100 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        </div>
      </td>
      <td className="px-3 py-2 text-gray-500 text-xs whitespace-nowrap max-sm:hidden">{date}</td>
      <td className="px-3 py-2 max-sm:hidden">
        <span className={`px-2 py-1 text-[11px] font-medium rounded-full border ${
            isPublished ? "bg-green-50 text-green-600 border-green-200" : "bg-yellow-50 text-yellow-600 border-yellow-200"
          }`}>
          {isPublished ? "Published" : "Unpublished"}
        </span>
      </td>
      <td className="px-3 py-2 flex items-center gap-1 max-sm:hidden">
        <button
          onClick={togglePublish}
          className={`px-2 py-1 text-[11px] font-semibold rounded border transition ${
            isPublished
              ? "bg-yellow-50 text-yellow-600 border-yellow-200 hover:bg-yellow-100"
              : "bg-green-50 text-green-600 border-green-200 hover:bg-green-100"
          }`}
        >
          {isPublished ? "Unpublish" : "Publish"}
        </button>
        <button
          onClick={deleteBlog}
          className="p-1.5 rounded-full border border-red-200 text-red-500 hover:bg-red-50 transition-colors"
        >
          <X className="w-3 h-3" />
        </button>
      </td>
    </tr>
  );
}

export default BlogTableItem;
