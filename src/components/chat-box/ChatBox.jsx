import React from "react";
import styles from "./ChatBox.module.css";
import SendIcon from "../../icons/SendIcon";
import RefreshIcon from "../../icons/RefreshIcon";
import Image from "next/image";

const ChatBox = ({
  userImageSrc = "/images/user.jpg",
  chatboxBgColor = "#edeade",        
  chatboxTextColor = "#000",          
  responseMsgBgColor = "#d5d8dc",    
  userMsgBgColor = "#7c3aed",        
  messageColor = "#fff",             
  inputTextColor = "#000"            
}) => {
  return (
    <div className={styles.mainContainer} style={{ backgroundColor: chatboxBgColor }}>
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
            Adam Zar
          </h1>
        </div>
        <RefreshIcon />
      </div>
      <div className={styles.chatboxContainer}>
        <div className={styles.chatBox}>
          <div className={styles.responseMsg} style={{ backgroundColor: responseMsgBgColor, color: chatboxTextColor }}>
            <p>Response message...</p>
          </div>
          <div className={styles.userMsgContainer}>
            <div className={styles.userMsg} style={{ backgroundColor: userMsgBgColor, color: messageColor }}>
              <p>Message from user...</p>
            </div>
            <Image
              src={userImageSrc}
              width={40}
              height={40}
              alt="user"
              className={styles.responseImage}
            />
          </div>
        </div>
        <div className={styles.inquryBox}>
          <div className={styles.inquryQ}>
            <button>inquiry question?</button>
          </div>
          <div className={styles.inquryQ}>
            <button>inquiry question?</button>
          </div>
          <div className={styles.inquryQ}>
            <button>inquiry question?</button>
          </div>
          <div className={styles.inquryQ}>
            <button>what are the packages?</button>
          </div>
          <div className={styles.inquryQ}>
            <button>what are the packages?</button>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputDiv}>
            <input
              type="text"
              className={styles.input}
              placeholder="Message..."
              style={{ color: inputTextColor }}  
            />
          </div>
          <div className={styles.sendIcon}>
            <SendIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
