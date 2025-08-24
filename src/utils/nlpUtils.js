import stringSimilarity from 'string-similarity';

// Simple stopwords list
const stopwords = ['i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', 'your', 'yours', 
  'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', 'her', 'hers', 'herself', 
  'it', 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 'what', 'which', 
  'who', 'whom', 'this', 'that', 'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be', 
  'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 
  'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 
  'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 
  'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 
  'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 
  'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 
  'than', 'too', 'very', 'can', 'will', 'just', 'don', 'should', 'now'];

// Simple tokenizer function
const tokenize = (text) => {
  return text.toLowerCase()
    .replace(/[^\w\s]/g, '') // Remove punctuation
    .split(/\s+/)            // Split on whitespace
    .filter(token => token.length > 0);
};

// Simple stemmer (just handles common endings)
const stemWord = (word) => {
  if (word.length < 3) return word;
  
  // Handle common endings
  if (word.endsWith('ing')) return word.slice(0, -3);
  if (word.endsWith('ed')) return word.slice(0, -2);
  if (word.endsWith('ly')) return word.slice(0, -2);
  if (word.endsWith('es')) return word.slice(0, -2);
  if (word.endsWith('s') && !word.endsWith('ss')) return word.slice(0, -1);
  
  return word;
};

// Process text by tokenizing, removing stopwords, and basic stemming
export const processText = (text) => {
  if (!text) return [];
  
  const tokens = tokenize(text);
  const filteredTokens = tokens.filter(token => !stopwords.includes(token));
  const stemmedTokens = filteredTokens.map(token => stemWord(token));
  
  return stemmedTokens;
};

// Calculate similarity between processed user input and FAQ keywords
export const calculateSimilarity = (userTokens, faqItem) => {
  // Process each keyword in the FAQ item
  const faqKeywords = faqItem.keywords.flatMap(keyword => 
    processText(keyword)
  );
  
  // If no keywords or tokens, return 0
  if (faqKeywords.length === 0 || userTokens.length === 0) {
    return 0;
  }

  // Count matching tokens
  let matchCount = 0;
  userTokens.forEach(token => {
    if (faqKeywords.includes(token)) {
      matchCount++;
    }
  });

  // Calculate direct keyword match score
  const keywordMatchScore = matchCount / Math.max(userTokens.length, 1);
  
  // Calculate string similarity between the processed question and user input
  const questionSimilarity = stringSimilarity.compareTwoStrings(
    userTokens.join(' '),
    processText(faqItem.question).join(' ')
  );
  
  // Return weighted average of both scores
  return keywordMatchScore * 0.6 + questionSimilarity * 0.4;
};