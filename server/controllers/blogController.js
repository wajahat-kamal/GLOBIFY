import fs from "fs";
import imagekit from "../configs/imageKit.js";
import Blog from "../models/blogModel.js";

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
