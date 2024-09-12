import React from "react";

const BotOutput = ({ message }) => {
  const convertLowercase = (text) => {
    return text.toLowerCase();
  };

  return <div className="message-text">{convertLowercase(message)}</div>;
};

export default BotOutput;
