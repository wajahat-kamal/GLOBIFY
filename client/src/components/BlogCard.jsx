import { ArrowRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function BlogCard({ blog }) {
  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col cursor-pointer group"
    >
      {/* Image Section */}
      <div className="relative w-full h-44 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-3">
        {/* Category */}
        <span className="text-xs font-medium text-primary bg-indigo-100 px-3 py-1 rounded-full w-fit mb-3">
          {category}
        </span>

        {/* Title */}
        <h4 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h4>

        {/* Description */}
        <p className="text-sm text-gray-600 flex-1 line-clamp-3 leading-relaxed">
          {description}
        </p>

        {/* Read More */}
        <div className="mt-2">
          <button className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-indigo-800 transition-colors duration-300">
            Read More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
