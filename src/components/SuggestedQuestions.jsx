import React, { useMemo } from 'react';

const SuggestedQuestions = ({ questions, onQuestionClick }) => {
  // Randomly select 3 questions from the provided questions array
  const selectedQuestions = useMemo(() => {
    if (!questions || questions.length === 0) return [];
    
    // Make a copy of the questions array to avoid modifying the original
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    
    // Return 2-3 questions (choose 3 if available, otherwise return what we have)
    const count = Math.min(3, shuffled.length);
    return shuffled.slice(0, count);
  }, [questions]);

  return (
    <div className="suggested-questions">
      <p>You can try asking:</p>
      <div className="questions-container">
        {selectedQuestions.map((item) => (
          <button
            key={item.id}
            className="question-button"
            onClick={() => onQuestionClick(item.question)}
          >
            {item.question}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestedQuestions;