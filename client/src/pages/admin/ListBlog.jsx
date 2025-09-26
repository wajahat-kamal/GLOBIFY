import React, { useEffect, useState } from "react";
import BlogTableItem from "../../components/admin/BlogTableItem";
import { FileText } from "lucide-react";
import { UseAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

function ListBlog() {
  const [blogs, setBlogs] = useState([]);
  const { axios } = UseAppContext();

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get("/api/admin/blogs");
      data.success ? setBlogs(data.blogs) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="p-4 bg-adminBG m-0 md:m-4 rounded-lg">
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-primary" />
          <h1 className="text-xl font-semibold text-gray-800">All Blogs</h1>
        </div>
        <p className="text-gray-600 text-sm mt-1">
          List of all blogs. You can edit or delete them anytime.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-sm min-w-[250px]">
          <thead className="hidden md:table-header-group">
            <tr className="bg-gray-50 border-b border-gray-200 text-gray-700">
              <th className="py-2 px-3 font-medium">#</th>
              <th className="py-2 px-3 font-medium">Title</th>
              <th className="py-2 px-3 font-medium">Date</th>
              <th className="py-2 px-3 font-medium">Status</th>
              <th className="py-2 px-3 font-medium text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <BlogTableItem
                key={blog.id}
                fetchBlogs={fetchBlogs}
                index={index + 1}
                blog={blog}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListBlog;
