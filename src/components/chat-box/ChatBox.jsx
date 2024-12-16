import React, { useState, useEffect, useRef } from "react";
import styles from "./ChatBox.module.css";
import SendIcon from "../../icons/SendIcon";
import RefreshIcon from "../../icons/RefreshIcon";
import Image from "next/image";

const ChatBox = ({
  userImageSrc = "/images/user.jpg",
  chatboxBgColor = "#FFFFFF",
  chatboxTextColor = "#27272a",
  responseMsgBgColor = "#e4e4e7",
  userMsgBgColor = "#7C3AED",
  messageColor = "#fff",
  inputTextColor = "#000",
}) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "response",
      text: "👋 Hi! I am Chatbase AI, ask me anything about Chatbase!",
    },
    {
      type: "response",
      text: "By the way, you can create a chatbot like me for your website! 😮",
    },
  ]);

  const chatBoxRef = useRef(null);

  const onSend = () => {
    if (!message) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { type: "user", text: message },
    ]);
    setMessage("");
  };

  const onInquiryClick = (inquiry) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: "user", text: inquiry },
    ]);
  };

  const handleRefresh = () => {
    setMessages([
      {
        type: "response",
        text: "👋 Hi! I am Chatbase AI, ask me anything about Chatbase!",
      },
      {
        type: "response",
        text: "By the way, you can create a chatbot like me for your website! 😮",
      },
    ]);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSend();
    }
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      className={styles.mainContainer}
      style={{ backgroundColor: chatboxBgColor }}
    >
      <div className={styles.headerContainer}>
        <div className={styles.header}>
          <Image
            src={userImageSrc}
            width={60}
            height={60}
            alt="user"
            className={styles.headerImage}
          />
          <h1 className={styles.headerText} style={{ color: chatboxTextColor }}>
            Code Analytics
          </h1>
        </div>
        <button onClick={handleRefresh}>
          <RefreshIcon />
        </button>
      </div>
      <div className={styles.chatboxContainer} ref={chatBoxRef}>
          {messages.map((item, index) =>
            item.type === "response" ? (
              <div key={index} className={styles.resMsgContainer}>
                <Image
                  src={userImageSrc}
                  width={32}
                  height={32}
                  alt="user"
                  className={styles.responseImage}
                />
                <div
                  className={styles.responseMsg}
                  style={{
                    backgroundColor: responseMsgBgColor,
                    color: chatboxTextColor,
                  }}
                >
                  <p>{item.text}</p>
                </div>
              </div>
            ) : (
              <div
                key={index}
                className={styles.userMsg}
                style={{
                  backgroundColor: userMsgBgColor,
                  color: messageColor,
                }}
              >
                <p>{item.text}</p>
              </div>
            )
          )}
        </div>

        <div className={styles.inquryBox}>
          {[
            "Inquiry question 1",
            "Inquiry question 2",
            "Inquiry question 3",
            "What are the packages?",
          ].map((inquiry, index) => (
            <div key={index} className={styles.inquryQ}>
              <button onClick={() => onInquiryClick(inquiry)}>{inquiry}</button>
            </div>
          ))}
        </div>
        
        <div className={styles.inputContainer}>
          <div className={styles.inputDiv}>
            <input
              type="text"
              className={styles.input}
              placeholder="Message..."
              style={{ color: inputTextColor }}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              value={message}
            />
          </div>
          <div className={styles.sendIcon}>
            <button onClick={onSend}>
              <SendIcon />
            </button>
          </div>
        </div>
      </div>
  );
};

export default ChatBox;
