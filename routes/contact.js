import express from "express";
import mongoose from "mongoose";
import validator from "validator"; // For email validation

const router = express.Router();

// Define schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

// Avoid model overwrite error in development
const ContactMessage = mongoose.models.ContactMessage || mongoose.model("ContactMessage", contactSchema);

 
// POST /api/contact
router.post("/", async (req, res) => {
  console.log("📩 Contact form submission received:", req.body);
  const { name, email, message } = req.body;

  // Basic validation for empty fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill all fields" });
  }

  // Validate email format
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  try {
    // Create new contact message
    const newMessage = new ContactMessage({ name, email, message });
    await newMessage.save();

    res.status(201).json({ message: "✅ Message saved successfully" });
  } catch (error) {
    console.error("❌ Error saving message:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
