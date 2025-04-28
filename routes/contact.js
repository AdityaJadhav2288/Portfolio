import express from "express";
import mongoose from "mongoose";

const router = express.Router();

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const ContactMessage = mongoose.models.ContactMessage || mongoose.model("ContactMessage", contactSchema);

router.post("/", async (req, res) => {
  console.log("Received contact form submission:", req.body);
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill all fields" });
  }

  try {
    const newMessage = new ContactMessage({ name, email, message });
    await newMessage.save();
    return res.status(201).json({ message: "Message saved successfully" });
  } catch (error) {
    console.error("Error saving message:", error);
    return res.status(500).json({ error: "Server error" });
  }
});

export default router;
