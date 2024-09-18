import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeButton() {
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    const rootElement = document.getElementById("root");

    if (currentTheme === "light") {
      rootElement.style.setProperty("--background-color", "cyan"); // Light background color
      rootElement.style.setProperty("--navbar-color", "#f5f5f5"); // Light text color
      rootElement.style.setProperty("--text-color", "#0040ff");
    } else {
      rootElement.style.setProperty("--background-color", "#2c3e50"); // Dark background color
      rootElement.style.setProperty("--navbar-color", "#f5f5f5"); // Dark text color
      rootElement.style.setProperty("--text-color", "blue");
    }
  }, [currentTheme]);

  const handleClick = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={handleClick} className="theme-button">
      {currentTheme === "light" ? <FaMoon size={25} /> : <FaSun size={25} />}
    </button>
  );
}
