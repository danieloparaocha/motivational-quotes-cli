const axios = require('axios');

const localQuotes = [
    { q: "Life is what happens when you're busy making other plans.", a: "John Lennon" },
    { q: "The purpose of our lives is to be happy.", a: "Dalai Lama" },
    { q: "Get busy living or get busy dying.", a: "Stephen King" }
  ];
  
  async function getQuote() {
    try {
      const response = await axios.get('https://zenquotes.io/api/random');
      const quoteData = response.data[0];
      console.log(`Here's a motivational quote for you:\n"${quoteData.q}" - ${quoteData.a}`);
    } catch (error) {
      console.warn("Could not get a quote from api. Displaying a local quote instead.");
      const randomQuote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
      console.log(`"${randomQuote.q}" - ${randomQuote.a}`);
    }
  }

getQuote();