
// import required packages
import React, { useState } from "react";
import "./App.css";
import ChatScreen from "./components/chatScreen/ChatScreen";
import ChatBox from "./components/chatBox/ChatBox";

// functional app component
function App() {

  // State to store chat messages
  const [messages, setMessages] = useState([]);

  // State to store the input value from the chat box
  const [inputValue, setInputValue] = useState("");

  // Function to handle sending a message and adding it to the chat history
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
        setMessage={handleSetMessage}     // Passing the function to handle new messages
        inputValue={inputValue}           // Passing the current input value to the ChatBox
        setInputValue={setInputValue}     // Passing the function to update the input value
      />
    </div>
  );
}

export default App;
