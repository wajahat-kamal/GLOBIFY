import React from "react";
import Moment from "moment";

export default function CommentsSection({ comments }) {
  return (
    <div className="mt-12">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-gray-900">
        Comments <span className="text-gray-500">({comments.length})</span>
      </h2>

      {/* Comments List */}
      <div className="mt-6 space-y-6">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition"
          >
            {/* Author & Date */}
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-800">
                {comment.name}
              </h3>
              <span className="text-sm text-gray-500">
                {Moment(comment.createdAt).format("MMMM Do, YYYY")}
              </span>
            </div>

            {/* Comment Content */}
            <p className="mt-3 text-gray-700 leading-relaxed">
              {comment.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
