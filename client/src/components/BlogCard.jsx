import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function BlogCard({ blog }) {
  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="max-w-sm w-full bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer group max-sm:max-w-[280px]"
    >
      <div className="relative w-full h-40 max-sm:h-32 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      <div className="p-3 max-sm:p-2 flex flex-col">
        <span className="text-xs max-sm:text-[10px] font-medium text-primary bg-primary/10 px-2 max-sm:px-1.5 py-1 max-sm:py-0.5 rounded-full w-fit mb-2">
          {category}
        </span>

        <h3 className="text-lg max-sm:text-base font-semibold text-gray-800 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p
          className="text-sm max-sm:text-xs text-gray-600 my-2 max-sm:my-1 line-clamp-2"
          dangerouslySetInnerHTML={{ __html: description.slice(0, 75) + "..." }}
        ></p>

        <div className="flex items-center gap-2 text-sm max-sm:text-xs font-medium text-primary hover:text-primary/80 transition-colors">
          Read More
          <ArrowRight className="w-4 h-4 max-sm:w-3 max-sm:h-3 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
