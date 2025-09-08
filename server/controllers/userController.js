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

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email"
      })
    }

    const existingEmail = await User.findOne({email})

    if (existingEmail) {
      return res.status(400).json({
        success: false,
        message: "Email already exist"
      })
    }

    if (password < 6) {
      return res.json({
        success: false,
        message: "password min lenght 6"
      })
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullName,
      email,
      password: hashPassword,
    });

    res.status(201).json({
      success: true,
      message: "Account created succesfully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
    });
  }
};
