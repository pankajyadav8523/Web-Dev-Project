import React, { useEffect, useRef } from "react";
import "./ChatScreen.css";
import { FaUser, FaRobot } from "react-icons/fa";
import BotOutput from "../Output/BotOutput";
import UserOutput from "../Output/UserOutput";

const ChatScreen = ({ messages, inputValue }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="container chatscreen shadow-none p-5 rounded mt-5">
      <div className="message-container">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message-wrapper ${
              message.sender === "user" ? "user-message" : "bot-message"
            }`}
          >
            <div className="icon-box">
              {message.sender === "user" ? (
                <FaUser className="user-icon" />
              ) : (
                <FaRobot className="bot-icon" />
              )}
            </div>
            {message.sender === "user" ? (
              <UserOutput message={message.text} />
            ) : (
              <BotOutput message={message.text} />
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatScreen;
