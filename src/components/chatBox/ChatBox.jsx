import React, { useState } from "react";
import "./ChatBox.css";

const ChatBox = ({ setMessage, inputValue, setInputValue }) => {
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setMessage(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="container chatbox">
      <input
        type="text"
        placeholder="Type your message"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        value={inputValue}
      />
    </div>
  );
};

export default ChatBox;
