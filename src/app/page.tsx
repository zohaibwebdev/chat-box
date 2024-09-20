import React from "react";
import ChatboxModule from "../components/chatbox-module/ChatboxModule";
const HomePge = () => {
  return (
    <>
      <h1>welcome to the chat app</h1>
      <ChatboxModule
        buttonBgColor="#3498db"
        iconColor="#fff"
        chatboxBgColor="#f4f4f4"
        chatboxTextColor="#333"
        responseMsgBgColor="#e0e0e0"
        userMsgBgColor="#9b59b6"
        messageColor="#fff"
        inputTextColor="#555"
      />
    </>
  );
};

export default HomePge;
