import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/myDatabase";

const connectDB = async () => {
  const maxRetries = 5;
  let retries = 0;

  const connectWithRetry = async () => {
    try {
      await mongoose.connect(MONGODB_URI);
      console.log("✅ MongoDB connected");
    } catch (error) {
      retries++;
      console.error(`❌ MongoDB connection error (attempt ${retries}):`, error.message);
      if (retries < maxRetries) {
        console.log("Retrying connection in 5 seconds...");
        setTimeout(connectWithRetry, 5000);
      } else {
        console.error("❌ Failed to connect to MongoDB after multiple attempts.");
        process.exit(1);
      }
    }
  };

  await connectWithRetry();
};

export default connectDB;
