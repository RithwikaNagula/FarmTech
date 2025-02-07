import React from "react";
const Spinner = () => {
  return (
    <div style={containerStyle}>
      <div style={dropsContainerStyle}>
        <div style={{ ...dropStyle, animationDelay: "0s" }}></div>
        <div style={{ ...dropStyle, animationDelay: "0.3s" }}></div>
        <div style={{ ...dropStyle, animationDelay: "0.6s" }}></div>
      </div>
      <p style={textStyle}>Saving Lives...</p>
      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              background-color: #ff4d4d;
            }
            50% {
              transform: scale(1.2);
              background-color: #ff9999;
            }
          }
        `}
      </style>
    </div>
  );
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#f5f5f5",
};

const dropsContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  width: "120px",
};

const dropStyle = {
  width: "30px",
  height: "50px",
  backgroundColor: "#ff4d4d",
  clipPath: "polygon(50% 0%, 90% 30%, 100% 80%, 50% 100%, 0% 80%, 10% 30%)",
  animation: "pulse 1.2s infinite ease-in-out",
};

const textStyle = {
  marginTop: "20px",
  fontSize: "18px",
  color: "#555",
};

export default Spinner;



