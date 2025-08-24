import React from 'react';

const ChatMessage = ({ message, isBot }) => {
  return (
    <div className={`chat-message ${isBot ? 'bot' : 'user'}`}>
      <div className="message-content">
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;