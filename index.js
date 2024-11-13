const axios = require('axios');

const localQuotes = [
    { q: "Life is what happens when you're busy making other plans.", a: "John Lennon" },
    { q: "The purpose of our lives is to be happy.", a: "Dalai Lama" },
    { q: "Get busy living or get busy dying.", a: "Stephen King" }
  ];//This is a JavaScript array of objects. Each object represents a quote and its author. The key "q" represents the quote and the key "a" represents the author
  
  async function getQuote() {
    try {
      const response = await axios.get('https://zenquotes.io/api/random');//This returns a promise that resolves to the response from the server and The await keyword is used to pause the execution of the function until the promise is resolved.
      const quoteData = response.data[0];//this contains the actual quote data which includes the quote and the author
      console.log(`Here's a motivational quote for you:\n"${quoteData.q}" - ${quoteData.a}`);
    } catch (error) {
      console.warn("Could not get a quote from api. Displaying a local quote instead.");
      const randomQuote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
      console.log(`"${randomQuote.q}" - ${randomQuote.a}`);
    }//If there is an error during the fetch operation, the catch block is executed. In this case, a warning message is logged to the console, and a random quote is selected from the localQuotes array and logged to the console
  }

getQuote();