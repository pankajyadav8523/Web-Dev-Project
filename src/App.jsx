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
  console.log(messages);
  return (
    <div className="App container-md">
      <h1
        style={{
          textAlign: "center",
          color: "#3498db",
          backgroundColor: "#f5f5f5",
          padding: "10px",
          marginBottom: "0",
          borderRadius: "10px",
        }}
      >
        Chatbot
      </h1>

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
