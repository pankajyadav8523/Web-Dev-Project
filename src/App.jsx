import React, { useState } from "react";
import "./App.css";
import ChatScreen from "./components/chatScreen/ChatScreen";
import ChatBox from "./components/chatBox/ChatBox";

const getRandomTransformation = () => {
  const transformations = [
    "countWords",
    "reverseText",
    "countCharacters",
    "removeVowels",
    "replaceSpaces",
  ];
  return transformations[Math.floor(Math.random() * transformations.length)];
};

function App() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSetMessage = (newMessage) => {
    const botMessage = {
      text: newMessage,
      sender: "bot",
      transformation: getRandomTransformation(),
    };
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: newMessage, sender: "user" },
      botMessage,
    ]);
  };

  return (
    <div className="App">
      <ChatScreen messages={messages} />
      <ChatBox
        setMessage={handleSetMessage}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </div>
  );
}

export default App;
