const randomQuoteBtn = document.querySelector(".random-quote");
const copyBtn = document.querySelector(".copy");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

const apiUrl = "https://api.quotable.io/random";


function updateQuote() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(`${data.content} —${data.author}`);
      author.innerText = `${data.author}`;
      quote.innerText = `"${data.content}"`;
    })
    .catch((error) => {
      console.log(error);
    });
}

randomQuoteBtn.addEventListener("click", updateQuote);
