import React, { useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
        height: "100vh",
        textAlign: "center",
        paddingTop: "100px"
      }}
    >
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;