import React from "react";
import "../chatScreen/ChatScreen.css";

const countWords = (text) => {
  text = text.trim();
  let count = 0;
  if (text.length === 0) {
    return count;
  }
  for (let i = 1; i < text.length; i++) {
    if (text[i - 1] === " " && text[i] !== " ") {
      count += 1;
    }
  }
  return count + 1;
};

const reverseText = (text) => {
  text = text.trim();
  let result = "";
  for (let i = text.length - 1; i >= 0; i--) {
    result += text[i];
  }
  return result;
};

const transformations = {
  countWords: (text) => countWords(text),
  reverseText: (text) => reverseText(text),
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
