import React, { useState } from "react";
import styles from "./ContactForm.module.css";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill all fields" });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        setStatus({ type: "error", message: data.error || "Failed to send message" });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Failed to send message" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        disabled={loading}
      />
      <input
        className={styles.input}
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        disabled={loading}
      />
      <textarea
        className={styles.textarea}
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        disabled={loading}
      />
      <button className={styles.button} type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </button>
      {status && (
        <p className={status.type === "error" ? styles.error : styles.success}>
          {status.message}
        </p>
      )}
    </form>
  );
};