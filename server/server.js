import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();

// Middlewares
app.use(cors());           // ✅ function call
app.use(express.json());   // ✅ function call

app.get("/", (req, res) => {
  res.send("APIs is Working 🚀");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
