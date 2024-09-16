import React, { useState } from "react";
import "./App.css";
import ChatScreen from "./components/chatScreen/ChatScreen";
import ChatBox from "./components/chatBox/ChatBox";
import ThemeButton from "./components/ThemeButton";

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
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: newMessage, sender: "user" },
    ]);
    setTimeout(() => {
      const botMessage = {
        text: newMessage,
        sender: "bot",
        transformation: getRandomTransformation(),
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 500);
  };

  return (
    <div className="App container-md">
      <div className="header-container">
        <h1 className="chatbot">Chatbot</h1>
        <ThemeButton />
      </div>
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
