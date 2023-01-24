
let apiQuotes = [];
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author-name');
const twitter = document.getElementById("twitter");
const QuoteBtn = document.getElementById("new-quote");

//Show quote
function newQuote(){
    let quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length - 1 )];
    

    //if author is null, author is set to Unknown
    if(!quote.author){
        quoteAuthor.textContent = "Unknown";
    }else{
        quoteAuthor.textContent = quote.author;
    }

    //checking for longer quote to determinet the styling
    if(quote.text.length > 25 ){
        quoteText.classList.add("long-quote");
    }else{
        quoteText.classList.remove("long-quote");
    }

    quoteText.textContent = quote.text
}

// Get Quote from the API
async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    }catch{(error)
        //Handle the error here
        alert("API Fecth Error")
    }
}

QuoteBtn.addEventListener("click", newQuote)
 
twitter.addEventListener("click", tweetQuote)

//Tweet Quote
function tweetQuote(){
    const tweetUrl = `https://www.twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
    window.open(tweetUrl, '_blank');
}

//on load
getQuotes();

































