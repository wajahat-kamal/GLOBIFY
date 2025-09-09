import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./configs/db.js";
import userRoute from "./routes/user.route.js"

const app = express();

// Middlewares
app.use(
  cors({
    origin: "http://localhost:5173", // Vite or CRA
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());


// Routes
app.use("/api/v1/user", userRoute)

app.get("/", (req, res) => {
  res.send("APIs is Working 🚀");
});

const PORT = process.env.PORT || 8000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`✅ Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
  }
};

startServer();
