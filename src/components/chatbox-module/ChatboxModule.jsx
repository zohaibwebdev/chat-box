'use client'
import React, { useState } from 'react';
import styles from './ChatboxButton.module.css';
import ChatIcon from '../../icons/ChatIcon';
import ChevronsDown from '../../icons/ChevronsDown';
import ChatBox from '../chat-box/ChatBox';

const ChatboxModule = ({
  buttonBgColor = '#0a0a0c',  // Button background color
  iconColor = '#fff',        // Icon color
  chatboxBgColor = '#edeade', // Chatbox background color
  chatboxTextColor = '#000',  // Chatbox overall text color
  responseMsgBgColor = '#d5d8dc', // Response message background color
  userMsgBgColor = '#7c3aed',     // User message background color
  messageColor = '#fff',           // Message text color
  inputTextColor = '#000'          // Input text color
}) => {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);

  const toggleChatbox = () => {
    setIsChatboxOpen((prev) => !prev);
  };

  return (
    <div className={styles.chatboxModule} style={{ backgroundColor: buttonBgColor }}>
      <button
        onClick={toggleChatbox}
      >
        {isChatboxOpen ? (
          <ChevronsDown color={iconColor} />  
        ) : (
          <ChatIcon color={iconColor} />     
        )}
      </button>
      {isChatboxOpen && (
        <ChatBox
          chatboxBgColor={chatboxBgColor}       
          chatboxTextColor={chatboxTextColor}    
          responseMsgBgColor={responseMsgBgColor} 
          userMsgBgColor={userMsgBgColor}         
          messageColor={messageColor}            
          inputTextColor={inputTextColor}        
        />
      )}
    </div>
  );
};

export default ChatboxModule;
