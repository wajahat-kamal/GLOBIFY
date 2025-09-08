import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/globify`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
      
          mongoose.connection.on("connected", () => {
            console.log("✅ Database is Connected");
          });
      
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDB;