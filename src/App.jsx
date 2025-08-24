import React from "react";
import ChatBubble from "./components/ChatBubble";
import "./styles/global.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Natural Language Processing Hub</h1>
        <p className="tagline">
          Exploring the intersection of human language and AI
        </p>
      </header>

      <main className="content">
        <section className="intro-section">
          <h2>What is NLP?</h2>
          <p>
            Natural Language Processing (NLP) is a field of artificial
            intelligence that enables computers to understand, interpret, and
            generate human language in a valuable way. From chatbots to
            sentiment analysis, NLP powers many of the AI tools we use daily.
          </p>
        </section>

        <section className="key-concepts">
          <h2>Key Concepts in NLP</h2>
          <div className="concept-grid">
            <div className="concept-card">
              <h3>Tokenization</h3>
              <p>
                Breaking text into words, phrases, symbols, or other meaningful
                elements.
              </p>
            </div>
            <div className="concept-card">
              <h3>Named Entity Recognition</h3>
              <p>
                Identifying entities such as people, places, organizations in
                text.
              </p>
            </div>
            <div className="concept-card">
              <h3>Sentiment Analysis</h3>
              <p>
                Determining the emotional tone behind words to understand
                attitudes and opinions.
              </p>
            </div>
            <div className="concept-card">
              <h3>Machine Translation</h3>
              <p>
                Converting text or speech from one language to another
                automatically.
              </p>
            </div>
          </div>
        </section>

        <section className="key-areas">
          <h2>Key Areas of NLP</h2>
          <div className="areas-grid">
            <div className="area-card">
              <h3>Text Classification</h3>
              <p>Categorizing text documents into predefined categories.</p>
            </div>
            <div className="area-card">
              <h3>Sentiment Analysis</h3>
              <p>Determining the emotional tone behind text data.</p>
            </div>
            <div className="area-card">
              <h3>Named Entity Recognition</h3>
              <p>
                Identifying entities like people, places, and organizations in
                text.
              </p>
            </div>
            <div className="area-card">
              <h3>Machine Translation</h3>
              <p>Converting text from one language to another.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Chat bubble that opens the chatbot interface */}
      <ChatBubble />

      <footer className="app-footer">
        <p>&copy; 2025 Learn about Natural Language Processing</p>
      </footer>
    </div>
  );
}

export default App;
