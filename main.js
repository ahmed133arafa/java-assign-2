const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Stay hungry, stay foolish. - Steve Jobs",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "so many books , so little time . - frank zappa",
  "without music , life would be a mistake - Friedrich Nietzsche",
  "It is better to be hated for what you are than to be loved for what you are not. -  Andre Gide",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",

];

function generateRandomQuote() {
  const quoteElement = document.getElementById('quote');
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.innerHTML = quotes[randomIndex];
}

const generateBtn = document.getElementById('generateBtn');
generateBtn.addEventListener('click', generateRandomQuote);

  