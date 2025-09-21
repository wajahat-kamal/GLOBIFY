import React, { useEffect, useRef, useState } from "react";
import { PlusCircle, Loader2 } from "lucide-react";
import uploadImage from "../../assets/uploadImage.svg";
import Quill from "quill";
import { UseAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

function AddBlogs() {
  const { axios } = UseAppContext();

  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false); // AI generation loading
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
    if (!title) return toast.error("Please enter a title!");

    try {
      setLoading(true);
      const { data } = await axios.post("/api/blog/generate", { prompt: title });

      if (data.success) {
        const quill = quillRef.current;
        // Gemini returns plain text: convert line breaks to <br>
        const html = data.content.replace(/\n/g, "<br>");
        quill.clipboard.dangerouslyPasteHTML(html);
        toast.success("Content generated!");
      } else {
        toast.error(data.error || "Failed to generate content");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Error generating content");
      console.error("Generate content error:", error);
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
        // Reset form
        setImage(null);
        setTitle("");
        setCategory("Startup");
        setIsPublished(false);
        quillRef.current.root.innerHTML = "";
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
      console.error("Add blog error:", error);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="bg-adminBG p-6 m-0 md:m-5 rounded-xl shadow-sm space-y-6 relative"
    >
      {/* ===== Thumbnail Upload ===== */}
      <div>
        <p className="text-sm font-medium text-gray-600 mb-2">Upload Thumbnail</p>
        <label
          htmlFor="image"
          className="block w-40 border border-dashed border-gray-300 rounded-lg p-2 cursor-pointer hover:border-primary hover:bg-primary/5 transition"
        >
          <div className="flex flex-col items-center justify-center gap-3">
            <img
              src={!image ? uploadImage : URL.createObjectURL(image)}
              alt="thumbnail preview"
              className="cursor-pointer object-cover rounded-lg max-h-32"
            />
            <span className="text-xs text-gray-500">Click to upload</span>
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

      {/* ===== Blog Title ===== */}
      <div>
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
          className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary outline-none transition"
          required
        />
      </div>

      {/* ===== Blog Description (Quill Editor) ===== */}
      <div className="relative w-full max-w-lg">
        <label
          htmlFor="description"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Blog Description
        </label>

        <div className="relative h-60 rounded-lg border border-gray-300 bg-white shadow-sm overflow-y-auto overflow-x-hidden focus-within:ring-2 focus-within:ring-primary">
          <div ref={editorRef} className="h-full"></div>

          {/* Loading overlay during AI generation */}
          {loading && (
            <div className="absolute inset-0 bg-white/60 flex items-center justify-center rounded-lg z-10">
              <Loader2 className="animate-spin text-primary w-8 h-8" />
            </div>
          )}

          <button
            type="button"
            onClick={generateContent}
            disabled={loading}
            className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-primary text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow hover:bg-primary/90 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            ⚡ {loading ? "Generating..." : "Generate with AI"}
          </button>
        </div>
      </div>

      {/* ===== Category Selector ===== */}
      <div>
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
            className="w-full cursor-pointer appearance-none px-4 py-3 border border-gray-300 rounded-lg bg-white shadow-sm text-gray-700 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
          >
            <option value="All">All</option>
            <option value="Technology">Technology</option>
            <option value="Startup">Startup</option>
            <option value="Lifestyle">Lifestyle</option>
          </select>

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

      {/* ===== Publish Toggle ===== */}
      <div className="flex items-center gap-3 mt-4">
        <p className="text-sm font-medium text-gray-600">Publish Now</p>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isPublished}
            onChange={(e) => setIsPublished(e.target.checked)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-400 rounded-full peer peer-checked:bg-primary transition-colors"></div>
          <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full border shadow-sm transform peer-checked:translate-x-5 transition-transform"></div>
        </label>
      </div>

      {/* ===== Submit Button ===== */}
      <button
        type="submit"
        disabled={isAdding}
        className={`w-full max-w-lg flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 font-medium shadow transition-all
          ${
            isAdding
              ? "bg-primary/70 text-white cursor-not-allowed"
              : "bg-primary text-white hover:bg-primary/90 hover:shadow-md"
          }`}
      >
        <PlusCircle className="w-5 h-5" />
        {isAdding ? "Adding..." : "Add Blog"}
      </button>
    </form>
  );
}

export default AddBlogs;
