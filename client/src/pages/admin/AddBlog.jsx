import React, { useEffect, useRef, useState } from "react";
import { PlusCircle, Loader2 } from "lucide-react";
import uploadImage from "../../assets/uploadImage.svg";
import Quill from "quill";
import { UseAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

function AddBlogs() {
  const { axios } = UseAppContext();

  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Startup");
  const [isPublished, setIsPublished] = useState(false);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: "snow" });
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  const generateContent = async () => {
    if (!title) return toast.error("Enter a title first!");

    try {
      setLoading(true);
      const { data } = await axios.post("/api/blog/generate", { prompt: title });

      if (data.success) {
        const html = data.content.replace(/\n/g, "<br>");
        quillRef.current.clipboard.dangerouslyPasteHTML(html);
        toast.success("AI content generated!");
      } else toast.error(data.error || "Generation failed");
    } catch (error) {
      toast.error(error.response?.data?.message || "Error generating");
    } finally {
      setLoading(false);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsAdding(true);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", quillRef.current.root.innerHTML);
      formData.append("category", category);
      formData.append("isPublished", isPublished);
      formData.append("image", image);

      const { data } = await axios.post("/api/blog/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (data.success) {
        toast.success(data.message);
        setImage(null);
        setTitle("");
        setCategory("Startup");
        setIsPublished(false);
        quillRef.current.root.innerHTML = "";
      } else toast.error(data.message || "Something went wrong");
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="bg-adminBG p-4 m-0 md:m-4 rounded-lg shadow space-y-4"
    >
      {/* Thumbnail Upload */}
      <div>
        <p className="text-xs font-medium text-gray-600 mb-1">Thumbnail</p>
        <label
          htmlFor="image"
          className="block w-32 border border-dashed border-gray-300 rounded-md p-2 cursor-pointer hover:border-primary hover:bg-primary/5 transition"
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <img
              src={!image ? uploadImage : URL.createObjectURL(image)}
              alt="thumbnail preview"
              className="object-cover rounded-md max-h-24"
            />
            <span className="text-[10px] text-gray-500">Click to upload</span>
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

      {/* Blog Title */}
      <div>
        <label
          htmlFor="title"
          className="block text-xs font-medium text-gray-600 mb-1"
        >
          Blog Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter blog title..."
          className="w-full max-w-md px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-primary outline-none"
          required
        />
      </div>

      {/* Blog Description */}
      <div className="relative w-full max-w-md">
        <label
          htmlFor="description"
          className="block text-xs font-semibold text-gray-700 mb-1"
        >
          Description
        </label>

        <div className="relative h-40 rounded-md border border-gray-300 bg-white shadow-sm overflow-y-auto">
          <div ref={editorRef} className="h-full"></div>

          {loading && (
            <div className="absolute inset-0 bg-white/60 flex items-center justify-center rounded-md z-10">
              <Loader2 className="animate-spin text-primary w-6 h-6" />
            </div>
          )}

          <button
            type="button"
            onClick={generateContent}
            disabled={loading}
            className="absolute bottom-2 right-2 inline-flex items-center gap-1 bg-primary text-white text-[10px] px-2 py-1 rounded-md shadow hover:bg-primary/90 transition disabled:opacity-60"
          >
            ⚡ {loading ? "Generating..." : "AI Generate"}
          </button>
        </div>
      </div>

      {/* Category Selector */}
      <div>
        <label
          htmlFor="category"
          className="block text-xs font-semibold text-gray-700 mb-1"
        >
          Category
        </label>
        <div className="relative w-full max-w-md">
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full text-sm px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:ring-2 focus:ring-primary outline-none"
          >
            <option value="All">All</option>
            <option value="Technology">Technology</option>
            <option value="Startup">Startup</option>
            <option value="Lifestyle">Lifestyle</option>
          </select>

          <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
            <svg
              className="w-3 h-3 text-gray-500"
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

      {/* Publish Toggle */}
      <div className="flex items-center gap-2 mt-2">
        <p className="text-xs font-medium text-gray-600">Publish Now</p>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isPublished}
            onChange={(e) => setIsPublished(e.target.checked)}
            className="sr-only peer"
          />
          <div className="w-9 h-5 bg-gray-400 rounded-full peer peer-checked:bg-primary transition-colors"></div>
          <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full border shadow-sm transform peer-checked:translate-x-4 transition-transform"></div>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isAdding}
        className={`w-full max-w-md flex items-center justify-center gap-1 rounded-md px-4 py-2 text-sm font-medium shadow
          ${isAdding
            ? "bg-primary/70 text-white cursor-not-allowed"
            : "bg-primary text-white hover:bg-primary/90"}`}
      >
        <PlusCircle className="w-4 h-4" />
        {isAdding ? "Adding..." : "Add Blog"}
      </button>

      <p className="mt-2 w-full max-w-md text-center text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-1 text-[10px] font-medium">
        Please fill all required fields before adding a blog.
      </p>
    </form>
  );
}

export default AddBlogs;
