import fs from "fs";
import imagekit from "../configs/imageKit.js";
import Blog from "../models/blogModel.js";
import Comment from "../models/commentModel.js";

export const addBlog = async (req, res) => {
  try {
    let { title, description, category, isPublished } = req.body;
    const imageFile = req.file;

    if (!title || !description || !category) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Convert string to boolean
    if (typeof isPublished === "string") {
      isPublished = isPublished.toLowerCase() === "true";
    }

    if (!imageFile) {
      return res.status(400).json({
        success: false,
        message: "Blog image is required",
      });
    }

    const fileBuffer = fs.readFileSync(imageFile.path);

    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/blogs",
    });

    const optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { quality: "auto" },
        { format: "webp" },
        { width: "1280" },
      ],
    });

    await Blog.create({
      title,
      description,
      category,
      isPublished,
      image: optimizedImageUrl,
    });

    return res.status(201).json({
      success: true,
      message: "Blog added successfully",
    });
  } catch (error) {
    console.error("Error adding blog:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true });

    return res.status(200).json({
      success: true,
      blogs,
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch blogs",
    });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const { blogId } = req.params;
    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    return res.status(200).json({
      success: true,
      blog,
    });
  } catch (error) {
    console.error("Error fetching blog by ID:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch blog",
    });
  }
};

export const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.body;

    await Blog.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to delete blog",
    });
  }
};

export const togglePublish = async (req, res) => {
  try {
    const { id } = req.body;

    const blog = await Blog.findById(id);
    blog.isPublished = !blog.isPublished;
    await blog.save();

    return res.status(200).json({
      success: true,
      message: `Blog has been ${
        blog.isPublished ? "Published" : "Unpublished"
      }`,
    });
  } catch (error) {
    console.error("Error toggling publish status:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to update blog status",
    });
  }
};

export const addComment = async (req, res) => {
  try {
    const { content, blog, name } = req.body;

    const comment = await Comment.create({
      name,
      content,
      blog,
    });

    return res.status(201).json({
      success: true,
      message: "Comment added successfully",
      comment,
    });
  } catch (error) {
    console.error("Error adding comment:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to add comment",
    });
  }
};

export const getBlogComment = async (req, res) => {
  try {
    const { blogId } = req.body;

    const comments = await Comment.find({
      blog: blogId,
      isApproved: true,
    }).sort({ createdAt: -1 });

    return res.json({
      success: true,
      count: comments.length,
      comments,
    });
  } catch (error) {
    console.error("Error fetching comments:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch comments",
    });
  }
};
