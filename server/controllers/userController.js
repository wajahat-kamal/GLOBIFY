import jwt from "jsonwebtoken";
import User from "../models/user.model";

export const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(404).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (condition) {
      
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullName,
      email,
      password: hashPassword,
    });

    res.status(201).json({
      success: true,
      message: "",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
    });
  }
};
