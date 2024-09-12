import React, { useState } from "react";
import "./App.css";
import ChatScreen from "./components/chatScreen/ChatScreen";
import ChatBox from "./components/chatBox/ChatBox";

function App() {
  const [messages, setMessages] = useState([]);

  const handleSetMessage = (newMessage) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: newMessage, sender: "user" },
      { text: newMessage, sender: "bot" },
    ]);
  };

  return (
    <div className="App">
      <ChatScreen messages={messages} />
      <ChatBox setMessage={handleSetMessage} />
    </div>
  );
}

export default App;
