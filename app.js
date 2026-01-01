const quoteTextEl = document.getElementById("quoteText");
const quoteAuthorEl = document.getElementById("quoteAuthor");
const quoteBtnEl = document.getElementById("quoteBtn");
const errorEl = document.getElementById("error");


const API_URL = "https://api.quotable.io/random";

function getQuote() {

    // API call

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            quoteTextEl.textContent = data.content;
            quoteAuthorEl.textContent = "-" + data.author;
            errorEl.textContent = "";
        })
        .catch(() => {
            errorEl.textContent = "Failed To Load Quote. Try Again!";
        });


    // error handle
};


quoteBtnEl.addEventListener('click', getQuote);