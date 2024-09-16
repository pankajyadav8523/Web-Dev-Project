import React from "react";
import "../chatScreen/ChatScreen.css";

const transformations = {
  countWords: (text) => text.split(" ").length,
  reverseText: (text) => text.split("").reverse().join(""),
  countCharacters: (text) => text.length,
  removeVowels: (text) => text.replace(/[aeiouAEIOU]/g, ""),
  replaceSpaces: (text) => text.replace(/\s+/g, "_"),
};

const BotOutput = ({ message, transformation }) => {
  const transformedMessage = transformations[transformation]
    ? transformations[transformation](message)
    : message;

  const transformationLabel = transformation
    .replace(/([A-Z])/g, " $1")
    .toUpperCase();

  return (
    <div className="message-text">
      <h4 className="transformation-heading">{transformationLabel}</h4>
      <p className="transformed-message">{transformedMessage}</p>
    </div>
  );
};

export default BotOutput;
