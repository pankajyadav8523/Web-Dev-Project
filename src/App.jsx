import React, { useState } from "react";
import "./App.css";
import ChatScreen from "./components/chatScreen/ChatScreen";
import ChatBox from "./components/chatBox/ChatBox";

function App() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSetMessage = (newMessage) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: newMessage, sender: "user" },
      { text: newMessage, sender: "bot" },
    ]);
  };

  return (
    <div className="App">
      <ChatScreen messages={messages} inputValue={inputValue} />
      <ChatBox
        setMessage={handleSetMessage}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </div>
  );
}

export default App;
