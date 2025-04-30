import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import contactRoutes from "./routes/contact.js";

// Load environment variables from .env
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Log the MongoDB URI being used
console.log("Using MongoDB URI:", process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/myDatabase");

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // Replacing body-parser with built-in express middleware

// API Routes
app.use("/api/contact", contactRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("🚀 API is running");
});

// Global Error Handler for uncaught errors
app.use((err, req, res, next) => {
  console.error("❌ Global Error:", err);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

