const quotes = [
    "JavaScript syntax is weird...",
    "Hey look, the text changed!",
    "I wonder how much front-end stuff I'll do in my future job?",
    "I hope this counts for full credit 🥺",
    "Random!"
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function updateQuote() {
    const quoteElement = document.getElementById("text-to-change");
    quoteElement.textContent = getRandomQuote();
}

const getQuoteBtn = document.getElementById("get-text-btn");
getQuoteBtn.addEventListener("click", updateQuote);
