import React, { useState, useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import ChatMessage from './ChatMessage';
import SuggestedQuestions from './SuggestedQuestions';
import { findBestMatch, getSuggestedQuestions } from '../utils/chatLogic';
import '../styles/ChatInterface.css';

const ChatInterface = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! I'm your friendly chatbot. How can I help you today?",
      isBot: true,
    }
  ]);
  const [input, setInput] = useState('');
  const [suggestedQuestions, setSuggestedQuestions] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Load suggested questions
    setSuggestedQuestions(getSuggestedQuestions());
    // Scroll to bottom of messages
    scrollToBottom();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    processUserMessage(input);
  };

  const processUserMessage = (userMessage) => {
    // Add user message to chat
    const userMessageObj = {
      id: messages.length + 1,
      text: userMessage,
      isBot: false,
    };
    
    setMessages(prev => [...prev, userMessageObj]);
    setInput('');
    
    // Process user input and get response
    setTimeout(() => {
      const bestMatch = findBestMatch(userMessage);
      
      const botResponse = {
        id: messages.length + 2,
        text: bestMatch.answer,
        isBot: true,
        isFallback: bestMatch.isFallback
      };
      
      setMessages(prev => [...prev, botResponse]);
    }, 600); // Small delay to simulate processing
  };

  const handleSuggestedQuestion = (question) => {
    processUserMessage(question);
  };

  return (
    <CSSTransition in={true} appear={true} timeout={300} classNames="chat-interface">
      <div className="chat-interface">
        <div className="chat-header">
          <h2>Chat Assistant</h2>
          <button className="close-button" onClick={onClose} aria-label="Close chat">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        
        <div className="chat-messages">
          {messages.map(message => (
            <ChatMessage 
              key={message.id} 
              message={message.text} 
              isBot={message.isBot} 
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        {messages.length === 1 && (
          <SuggestedQuestions 
            questions={suggestedQuestions} 
            onQuestionClick={handleSuggestedQuestion} 
          />
        )}
        
        <form className="chat-input-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type your question here..."
            aria-label="Type your question"
          />
          <button type="submit" aria-label="Send message">
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
      </div>
    </CSSTransition>
  );
};

export default ChatInterface;