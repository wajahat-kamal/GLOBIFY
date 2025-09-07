import React, { useState } from "react";
import uploadImage from "../../assets/uploadImage.svg";
import { Upload } from "lucide-react";

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

  return (
    <form className="bg-secondary p-6 m-5 rounded-xl shadow-sm">
      {/* Thumbnail Upload */}
      <div className="mb-6">
        <p className="text-sm font-medium text-gray-700 mb-2">
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
              className=" object-cover rounded-lg"
            />
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Upload className="w-4 h-4 text-gray-500" />
              <span>Click to upload</span>
            </div>
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

    </form>
  );
}

export default AddBlogs;
