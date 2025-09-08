import jwt from "jsonwebtoken";


export const signup = async (req, res) => {
    const  {fullName, email, password} = req.body;
  
    if (!fullName || !email || !password) {
      return res.status(404).json({
        success: false,
        message: "All fields are required"
      })
    }

   const hashPassword = await bcrypt.hash(password, 10)
}
