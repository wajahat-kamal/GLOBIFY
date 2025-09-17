import { X } from "lucide-react";
import React from "react";
import { UseAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

function BlogTableItem({ blog, fetchBlogs, index }) {
  const { title, createdAt, isPublished } = blog;
  const BlogDate = new Date(createdAt);

  const { axios } = UseAppContext();

  const deleteBlog = async () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this blog."
    );
    if (!confirm) return;
    try {
      const { data } = await axios.post("/api/blog/delete", { id: blog._id });
      if (data.success) {
        toast.success(data.message);
        await fetchBlogs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const togglePublish = async () => {
    try {
      const {data} = await axios.post("/api/blog/toggle-publish", {id: blog._id})
      if (data.success) {
        toast.success(data.message);
        await fetchBlogs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <tr className="border-b border-gray-400 hover:bg-gray-50 transition-colors">
      {/* Index */}
      <th className="px-2 py-3 text-gray-600 text-sm font-semibold w-12 align-top">
        {index}
      </th>

      {/* Main Content */}
      <td className="px-2 py-3 text-gray-800 font-medium">
        {/* Title */}
        <div className="truncate max-w-[280px] sm:max-w-[450px]">{title}</div>

        {/* Mobile: Date + Status + Actions */}
        <div className="flex flex-wrap items-center gap-3 mt-2 sm:hidden">
          {/* Date */}
          <span className="text-gray-500 text-xs">
            {BlogDate.toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>

          {/* Status */}
          <span
            className={`px-2 py-1 text-xs font-medium rounded-full border ${
              isPublished
                ? "bg-green-50 text-green-600 border-green-200"
                : "bg-yellow-50 text-yellow-600 border-yellow-200"
            }`}
          >
            {isPublished ? "Published" : "Unpublished"}
          </span>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              className={`px-2 py-1 text-xs font-semibold rounded-lg border transition-colors duration-200 ${
                isPublished
                  ? "bg-yellow-50 text-yellow-600 border-yellow-200 hover:bg-yellow-100"
                  : "bg-green-50 text-green-600 border-green-200 hover:bg-green-100"
              }`}
            >
              {isPublished ? "Unpublish" : "Publish"}
            </button>

            <button className="p-1.5 rounded-full border border-red-300 text-red-500 hover:bg-red-300 transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </td>

      {/* Desktop: Date */}
      <td className="px-4 py-3 text-gray-500 text-sm whitespace-nowrap max-sm:hidden">
        {BlogDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </td>

      {/* Desktop: Status */}
      <td className="px-4 py-3 max-sm:hidden">
        <span
          className={`px-3 py-1.5 text-xs font-medium rounded-full border ${
            isPublished
              ? "bg-green-50 text-green-600 border-green-200"
              : "bg-yellow-50 text-yellow-600 border-yellow-200"
          }`}
        >
          {isPublished ? "Published" : "Unpublished"}
        </span>
      </td>

      {/* Desktop: Actions */}
      <td className="px-4 py-3 flex items-center gap-2 max-sm:hidden">
        <button
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors duration-200 ${
            isPublished
              ? "bg-yellow-50 text-yellow-600 border-yellow-200 hover:bg-yellow-100"
              : "bg-green-50 text-green-600 border-green-200 hover:bg-green-100"
          }`}
        >
          {isPublished ? "Unpublish" : "Publish"}
        </button>

        <button className="p-2 rounded-full border border-red-200 text-red-500 hover:bg-red-50 transition-colors">
          <X className="w-4 h-4" />
        </button>
      </td>
    </tr>
  );
}

export default BlogTableItem;
