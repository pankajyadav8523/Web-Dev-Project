import React, { useState } from "react";
import "./ChatBox.css";
import { FaPaperPlane } from "react-icons/fa"; // Importing the send button icon

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

  return (
    <div className="container chatbox">
      <input
        type="text"
        placeholder="Type your message"
        onChange={handleInputChange}
        value={inputValue}
      />
      {/* Send button */}
      <FaPaperPlane
        className="send-icon"
        onClick={handleSendMessage} // Trigger send on click
      />
    </div>
  );
};

export default ChatBox;
