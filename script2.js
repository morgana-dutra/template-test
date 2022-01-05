
//Show New Quote
function newQuote() {
    //Pick a random quote from array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.lenght)];
    console.log(quote);
}

newQuote();