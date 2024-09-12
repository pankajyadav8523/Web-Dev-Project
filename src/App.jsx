import React from "react";
import "./App.css";
import ChatScreen from "./components/chatScreen/ChatScreen";
import ChatBox from "./components/chatBox/ChatBox";

function App() {
  return (
    <div className="App">
      <ChatScreen />
      <ChatBox />
    </div>
  );
}

export default App;
