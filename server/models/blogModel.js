import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: "", 
    },
    category: {
      type: String,
      default: "Startup", 
      trim: true,
    },
    isPublished: {
      type: Boolean,
      default: false, 
    },
  },
  { timestamps: true } 
);

const Blog = mongoose.model("blog", blogSchema);
export default Blog;
