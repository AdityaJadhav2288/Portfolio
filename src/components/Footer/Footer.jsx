import React from "react";

const footerStyle = {
  backgroundColor: "#222",
  color: "#fff",
  textAlign: "center",
  padding: "60px 20px",
  marginTop: "40px",
  fontSize: "24px",
  fontWeight: "bold",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

export const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>© {new Date().getFullYear()} Aditya . All rights reserved.</p>
    </footer>
  );
};
