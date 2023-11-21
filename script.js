// i need to get quote, author and tweet
// i need to get a quote api
// i need to run my function
// i need to declare my function
// debug sequentially
// use arrow functions


const text = document.getElementById("quote");
const author = document.getElementById("author");
const tweet = document.getElementById("tweet");

const getNewQuote = async () => {
   var url = "https://type.fit/api/quotes";
   const answer = await fetch(url);
   const allQuotes = await answer.json();
   const index = Math.floor(Math.random()*allQuotes.length);
   const quote = allQuotes[index].text;
   const auth = allQuotes[index].author;

   if (auth == null) {
        author = "Anonymous";
   }
   text.innerHTML = quote;
   author.innerHTML = "~ "+auth;

   tweetButton.href="https://twitter.com/intent/tweet?text="+quote+" ~ "+auth;

}
getNewQuote();

