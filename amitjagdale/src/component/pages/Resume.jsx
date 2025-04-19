import React from "react";

export default function Resume() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        margin: 0,
        padding: 0,
      }}
    >
      <iframe
        src="/amitjagdale_Resume.pdf"
        style={{
          height: "100%",
          width: "100%",
          border: "none",
          overflow: "hidden",
        }}
        title="Resume PDF"
      ></iframe>
    </div>
  );
}
