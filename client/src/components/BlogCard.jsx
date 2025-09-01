import { ArrowRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function BlogCard({ blog }) {
  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate()

  return (
    <div 
    onClick={() => navigate(`/blog/${_id}`)}
    className="bg-white rounded-xl hover:shadow-lg hover:scale-103 transition-all duration-300 overflow-hidden flex flex-col h-[370px]">
      {/* Image Section */}
      <div className="w-full h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-4">
        {/* Category */}
        <span className="text-xs font-medium text-primary bg-indigo-100 px-3 py-1 rounded-full w-fit mb-3">
          {category}
        </span>

        {/* Title */}
        <h4 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
          {title}
        </h4>

        {/* Description */}
        <p className="text-sm text-gray-600 flex-1 line-clamp-3">
          {description}
        </p>

        {/* Read More */}
        <div className="mt-4">
  <button className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-indigo-800 transition-colors duration-300">
    Read More
    <ArrowRight className="w-4 h-4" />
  </button>
</div>
      </div>
    </div>
  );
}

export default BlogCard;
