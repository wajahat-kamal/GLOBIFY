import React, { useState } from "react";
import uploadImage from "../../assets/uploadImage.svg";

function AddBlogs() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Startup");
  const [isPublished, setIsPublished] = useState(false);

  // Handle Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const generateContent = () => {};

  return (
    <form className="bg-secondary p-6 m-0 md:m-5 rounded-xl shadow-sm">
      {/* Thumbnail Upload */}
      <div className="mb-6">
        <p className="text-sm font-medium text-gray-600 mb-2">
          Upload Thumbnail
        </p>
        <label
          htmlFor="image"
          className="block  w-32 border-gray-300 rounded-xlcursor-pointer hover:border-primary transition"
        >
          <div className="flex flex-col items-center justify-center gap-3">
            <img
              src={!image ? uploadImage : URL.createObjectURL(image)}
              alt="thumbnail preview"
              className="cursor-pointer object-cover rounded-lg"
            />
          </div>
          <input
            type="file"
            id="image"
            hidden
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </label>
      </div>

      {/* Title Input */}
      <div className="mb-6">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-600 mb-2"
        >
          Blog Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter blog title..."
          className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
          required
        />
      </div>

      {/* Blog Description */}
      <div className="mb-6 relative w-full max-w-lg">
        <label
          htmlFor="description"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Blog Description
        </label>

        <div className="relative">
          <textarea
            id="description"
            rows={5}
            className="w-full px-4 py-3 pr-28 border border-gray-300 rounded-lg bg-white shadow-sm text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
            placeholder="Write a short description about your blog..."
            required
          />

          {/* Button inside textarea wrapper */}
          <button
            type="button"
            onClick={generateContent}
            className="absolute bottom-3 right-3 cursor-pointer inline-flex items-center gap-1.5 bg-primary text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow hover:bg-primary/90 transition"
          >
            ⚡ AI Generate
          </button>
        </div>
      </div>

      {/* Category Select */}
      <div className="mb-6">
        <label
          htmlFor="category"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Category
        </label>
        <div className="relative w-full max-w-lg">
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full  cursor-pointer appearance-none px-4 py-3 border border-gray-300 rounded-lg bg-white shadow-sm text-gray-700 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
          >
            <option value="All">All</option>
            <option value="Technology">Technology</option>
            <option value="Startup">Startup</option>
            <option value="Lifestyle">Lifestyle</option>
          </select>

          {/* Custom Dropdown Arrow */}
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddBlogs;
