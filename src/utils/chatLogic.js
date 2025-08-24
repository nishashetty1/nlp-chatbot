import { processText, calculateSimilarity } from './nlpUtils';
import faqData from '../data/faqs.json';

// Minimum similarity threshold to consider a match
const SIMILARITY_THRESHOLD = 0.3;

// Find the best matching FAQ for user input
export const findBestMatch = (userInput) => {
  // Process user input
  const processedInput = processText(userInput);
  
  // If input is too short or just stopwords (resulting in empty processed input)
  if (processedInput.length === 0) {
    return getRandomFallbackResponse();
  }
  
  // Calculate similarity scores for each FAQ item
  const scoredFaqs = faqData.faqs.map(faq => ({
    ...faq,
    similarityScore: calculateSimilarity(processedInput, faq)
  }));
  
  // Sort by similarity score in descending order
  scoredFaqs.sort((a, b) => b.similarityScore - a.similarityScore);
  
  // Return the best match if it exceeds threshold
  if (scoredFaqs[0].similarityScore >= SIMILARITY_THRESHOLD) {
    return scoredFaqs[0];
  }
  
  // Otherwise return a fallback response
  return getRandomFallbackResponse();
};

// Get a random fallback response
export const getRandomFallbackResponse = () => {
  const randomIndex = Math.floor(Math.random() * faqData.fallbackResponses.length);
  return {
    answer: faqData.fallbackResponses[randomIndex],
    isFallback: true
  };
};

// Get suggested questions for initial display
export const getSuggestedQuestions = () => {
  return faqData.faqs.map(faq => ({
    id: faq.id,
    question: faq.question
  }));
};