import jwt from "jsonwebtoken";
import Blog from "../models/blogModel.js";
import Comment from "../models/commentModel.js";

export const adminLogin = (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Generate JWT
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(200).json({
      success: true,
      message: "Login success",
      token,
    });
  } catch (error) {
    console.error("Admin login error:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

export const getAllBlogsAdmin = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });

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

export const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find({})
      .populate("Blog")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      comments,
    });
  } catch (error) {
    console.log("Error fetching comments:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch comments",
    });
  }
};

export const getDashboard = async (req, res) => {
  try {
    const [recentBlogs, blogs, comments, drafts] = await Promise.all([
      Blog.find({}).sort({ createdAt: -1 }).limit(5),
      Blog.countDocuments(),
      Comment.countDocuments(),
      Blog.countDocuments({ isPublished: false }),
    ]);

    const dashboardData = {
      recentBlogs,
      blogs,
      comments,
      drafts,
    };

    return res.status(200).json({
      success: true,
      dashboardData,
    });
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to load dashboard data",
    });
  }
};

export const deleteCommentById = async (req, res) => {
  try {
    const { id } = req.body;
    await Comment.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Comment deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting comment:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to delete comment",
    });
  }
};

export const approveCommentById = async (req, res) => {
  try {
    const { id } = req.body;

    const updatedComment = await Comment.findByIdAndUpdate(
      id,
      { isApproved: true },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Comment approved successfully",
      comment: updatedComment,
    });
  } catch (error) {
    console.error("Error approving comment:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to approve comment",
    });
  }
};
