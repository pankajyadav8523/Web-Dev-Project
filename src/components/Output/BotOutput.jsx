import React from "react";

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
      {`${transformationLabel}: ${transformedMessage}`}
    </div>
  );
};

export default BotOutput;
