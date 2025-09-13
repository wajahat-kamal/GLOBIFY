import { ArrowRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function BlogCard({ blog }) {
  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="max-w-sm w-full bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer group"
    >
      {/* Image */}
      <div className="relative w-full h-44 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col">
        {/* Category */}
        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full w-fit mb-2">
          {category}
        </span>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2 mb-2">
          {description}
        </p>

        {/* Read More */}
        <div className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          Read More
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
