import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/globify`);

    mongoose.connection.on("connected", () => {
      console.log("✅ Database is Connected");
    });
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1); 
  }
};

export default connectDB;
