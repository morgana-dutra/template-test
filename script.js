let apiQuotes = []; 

//Show New Quote
function newQuote() {
    //Pick a random quote from apiQuotes array
    // const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.lenght)];
    const quote = apiQuotes[12];
    console.log(quote);
}

// Get Quotes From API

//async function can run at any time independently and won't stop browser from completing the loading of a page
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes'; //api url
    // const apiUrl = 'quotes.json'; //api url
    // try catch allows us to attempt to complete a fetch request
    try {
        //the const "response" will not be populated until it has some data fetched from our api
        //if "response" doesn't have data, it will be "undefined"
        const response = await fetch(apiUrl); //asyncronous await
        //next, we are getting the json from our api (apiURL) as a response 
        //then, we are turning the response into a json object and passing it to a global variable:
        apiQuotes = await response.json();
        newQuote();
    } catch (error){
        // Catch Error Here, might show an alert to indicate error
    } 
} 

// On Load
getQuotes(); //runs the function when the page loads