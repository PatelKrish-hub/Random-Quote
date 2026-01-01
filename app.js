const quoteTextEl = document.getElementById("quoteText");
const quoteAuthorEl = document.getElementById("quoteAuthor");
const quoteBtnEl = document.getElementById("quoteBtn");
const errorEl = document.getElementById("error");


const API_URL = "https://dummyjson.com/quotes/random";

function getQuote() {
    quoteTextEl.textContent = "Loading...";
    quoteAuthorEl.textContent = "";

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            quoteTextEl.textContent = data.quote;
            quoteAuthorEl.textContent = "-" + data.author;
            errorEl.textContent = "";
        })
        .catch(() => {
            errorEl.textContent = "Failed To Load Quote. Try Again!";
            quoteTextEl.textContent = "";
            quoteAuthorEl.textContent = "";
        });


    // error handle
};


quoteBtnEl.addEventListener('click', getQuote);
