# NLP Rule-Based Chatbot

![GitHub language count](https://img.shields.io/github/languages/count/nishashetty1/nlp-chatbot)
![GitHub top language](https://img.shields.io/github/languages/top/nishashetty1/nlp-chatbot)

A simple rule-based chatbot built with React that uses natural language processing techniques to match user queries with appropriate responses.

## ✨ Features

- 💬 Interactive chat bubble interface with a modern purple theme
- 🔍 Keyword-based matching system to find relevant answers
- 🧠 Simple NLP techniques including:
  - Tokenization
  - Stopword removal
  - Basic stemming
  - String similarity comparison
- 💡 Suggested questions to guide users
- 📱 Fully responsive design for all devices
- ⚡ Optimized for performance

## 🖥️ Screenshot

<img width="1919" height="907" alt="image" src="https://github.com/user-attachments/assets/59d97851-447f-4875-9d71-40883001e5c1" />
<img width="1919" height="906" alt="image" src="https://github.com/user-attachments/assets/1c7baca3-df37-4702-b1c9-90299f273454" />
<img width="1919" height="906" alt="image" src="https://github.com/user-attachments/assets/dfba0f56-d0df-491d-90a1-a34b91f4b402" />


## 🛠️ Technologies Used

- **React**: Frontend framework
- **String Similarity**: For comparing text similarity
- **Font Awesome**: For icons
- **React Transition Group**: For smooth animations
- **Custom NLP Logic**: For processing and matching user queries

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nishashetty1/nlp-chatbot.git
   cd nlp-chatbot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📋 Project Structure

```
nlp-chatbot/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ChatBubble.jsx      # Chat bubble component
│   │   ├── ChatInterface.jsx   # Main chat interface
│   │   ├── ChatMessage.jsx     # Individual message component
│   │   └── SuggestedQuestions.jsx  # Suggested questions component
│   ├── utils/
│   │   └── chatLogic.js        # NLP and chat logic
│   ├── data/
│   │   └── faqs.json          # FAQ data for responses
│   ├── styles/
│   │   ├── ChatBubble.css
│   │   ├── ChatInterface.css
│   │   └── global.css
│   ├── App.jsx                # Main App component
│   └── index.js               # Entry point
└── package.json
```

## 🧠 NLP Implementation Details

The chatbot uses the following NLP techniques:

1. **Tokenization**: Breaking down user input into individual words
2. **Stopword Removal**: Filtering out common words that don't add meaning
3. **Basic Stemming**: Reducing words to their root form
4. **Keyword Matching**: Matching processed tokens against FAQ keywords
5. **String Similarity**: Comparing the overall similarity of questions

The matching algorithm combines keyword-based scoring with string similarity to find the most relevant response for user queries.

## 🔧 Customization

You can customize the chatbot by:

1. Editing the FAQ data in `src/data/faqs.json` to add your own Q&A pairs
2. Adjusting the similarity threshold in `chatLogic.js` to make matching more or less strict
3. Modifying the CSS variables in `global.css` to change the color theme

## 🌐 Deployment

This project is optimized for deployment on Vercel.

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

Project Link: [https://github.com/nishashetty1/nlp-chatbot](https://nlp-chatbot-pied.vercel.app/)
