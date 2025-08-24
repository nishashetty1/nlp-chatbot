import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import ChatInterface from './ChatInterface';
import '../styles/ChatBubble.css';

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chat-container">
      {isOpen ? (
        <ChatInterface onClose={toggleChat} />
      ) : (
        <button className="chat-bubble" onClick={toggleChat} aria-label="Open chat">
          <FontAwesomeIcon icon={faComments} />
        </button>
      )}
    </div>
  );
};

export default ChatBubble;