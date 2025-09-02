import React from "react";
import Moment from "moment";
import Avatar from "../assets/user-avatar.png"; // ✅ fixed import (no destructure)

export default function CommentsSection({ comments }) {
  return (
    <div className="mt-12 max-w-3xl mx-auto">
      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-3">
        Comments <span className="text-gray-500 text-lg">({comments.length})</span>
      </h2>

      {/* Comments List */}
      <div className="mt-6 space-y-4">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="p-5 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition"
          >
            {/* Author & Date */}
            <div className="flex items-center justify-between mb-3">
              {/* Avatar + Name */}
              <div className="flex items-center gap-3">
                <img
                  src={Avatar}
                  alt="User avatar"
                  className="w-8 h-8 rounded-full border border-gray-200 object-cover"
                />
                <h3 className="text-base font-semibold text-gray-800">
                  {comment.name}
                </h3>
              </div>

              {/* Date */}
              <span className="text-sm text-gray-500">
                {Moment(comment.createdAt).format("MMMM Do, YYYY")}
              </span>
            </div>

            {/* Comment Content */}
            <p className="text-gray-700 leading-relaxed">
              {comment.content}
            </p>
          </div>
        ))}

        {/* No Comments */}
        {comments.length === 0 && (
          <p className="text-gray-500 text-center text-sm italic">
            No comments yet. Be the first to share your thoughts!
          </p>
        )}
      </div>
    </div>
  );
}
