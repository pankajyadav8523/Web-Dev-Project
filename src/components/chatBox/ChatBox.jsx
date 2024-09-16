import React, { useState } from "react";
import "./ChatBox.css";
import { FaPaperPlane } from "react-icons/fa";

const ChatBox = ({ setMessage, inputValue, setInputValue }) => {
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessage(inputValue);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
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

      <FaPaperPlane className="send-icon" onClick={handleSendMessage} />
    </div>
  );
};

export default ChatBox;
