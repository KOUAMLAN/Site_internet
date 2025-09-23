import React from "react";

export default function CallToAction() {
  return (
    <div className="call-to-action" style={{ padding: "20px", textAlign: "center" }}>
      <a
        href="#contact"
        style={{
          display: "inline-block",
          backgroundColor: "#007bff",
          color: "white",
          padding: "15px 30px",
          borderRadius: "5px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "1.2rem",
        }}
      >
        Contactez-nous pour un premier cours offert
      </a>
    </div>
  );
}