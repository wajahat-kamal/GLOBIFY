import { X } from "lucide-react";
import React from "react";

function BlogTableItem({ blog, fetchBlogs, index }) {
  const { title, createdAt, isPublished } = blog;
  const BlogDate = new Date(createdAt);

  return (
    <tr className="border-b hover:bg-gray-50 transition">
      {/* Index */}
      <th className="px-4 py-3 text-gray-600 text-sm font-medium">{index}</th>

      {/* Title */}
      <td className="px-4 py-3 text-gray-800 font-medium">{title}</td>

      {/* Date */}
      <td className="px-4 py-3 text-gray-600 text-sm max-sm:hidden">
        {BlogDate.toDateString()}
      </td>

      {/* Status */}
      <td className="px-4 py-3 max-sm:hidden">
        <span
          className={`px-3 py-1 text-xs font-semibold rounded-full ${
            isPublished
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {isPublished ? "Published" : "Unpublished"}
        </span>
      </td>

      {/* Actions */}
      <td className="px-4 py-3 flex items-center gap-3">
        <button
          className={`px-3 py-1 text-xs font-medium rounded-md border transition ${
            isPublished
              ? "bg-yellow-50 text-yellow-600 border-yellow-200 hover:bg-yellow-100"
              : "bg-green-50 text-green-600 border-green-200 hover:bg-green-100"
          }`}
        >
          {isPublished ? "Unpublish" : "Publish"}
        </button>

        <button className="p-2 rounded-full hover:bg-red-100 text-red-500 transition">
          <X className="w-4 h-4" />
        </button>
      </td>
    </tr>
  );
}

export default BlogTableItem;
