/***
 * This app will display a new random quote which is not repeated every time the user clicks the `Next Quote` button.
***/

/*** 
 * `quotes` array 
 * This step is creating a variable 'quotes' which is an empty array, and then adding five objects to it.
 * The objects in the `quotes` array store the following properties of the quotes:
 *      1. quote (all quote objects) - string - the actual quote;
 *      2. source (all quote objects) - string - the person or character who said it;
 *      3. citation (at least one quote object) - string - the source of the quote, like the book, movie or song where the quote originates; and
 *      4. year (at least one quote object) - string - the year the quote originated.
***/

var quotes = [];

var quote1 =
{
    quote: 'I think therefore I am.',
    source: 'Rene Descartes',
    citation: 'Discourse on Method',
    year: '1637'
};

var quote2 =
{
    quote: 'Knowledge is power.',
    source: 'Sir Francis Bacon',
    citation: 'Meditationes Sacrae'
};

var quote3 =
{
    quote: 'The only thing we have to fear is fear itself.',
    source: 'Franklin D. Roosevelt',
    year: '1933'
};

var quote4 =
{
    quote: 'To be or not to be, that is the question.',
    source: 'William Shakespeare'
};

var quote5 =
{
    quote: 'Eighty percent of success is showing up.',
    source: 'Woody Allen',
    citation: 'New York Times',
    year: '1989'
};

/***
 * The objects are added to the 'quotes' array.
***/

quotes.push(quote1);
quotes.push(quote2);
quotes.push(quote3);
quotes.push(quote4);
quotes.push(quote5);

/***
 * `getRandomQuote` function
 * The function creates a random number and use that random number to return a random quote object from the 'quotes' array.
***/

function getRandomQuote() {
    var ranNum = Math.floor(Math.random() * quotes.length);
    return quotes[ranNum];
}

/***
 * `printQuote` function
***/

function printQuote() {
// 1. Create a variable that calls the getRandomQuote()
// function

    var ranQuote = getRandomQuote();

// Remove the the quote selected from the 'quotes' array so it is not repeated.

    quotes.splice(quotes.indexOf(ranQuote),1);

// 2. Create a variable that initiates your HTML string with
// the first two <p></p> elements, their classNames,
// and the quote and source properties, but leave off
// the second closing `</p>` tag for now

    var htmlStr = "<p class='quote'>" + ranQuote.quote + "</p><p class='source'>" + ranQuote.source;

// 3. Use an if statement to check if the citation property
// exists, and if it does, concatenate a <span></span>
// element, appropriate className, and citation property
// to the HTML string

    if (ranQuote.citation) {
        htmlStr += "<span class='citation'>" + ranQuote.citation + "</span>";
    }

// 4. Use an if statement to check of the year property exists,
// and if it does, concatenate a <span></span> element,
// appropriate className, and year property to the HTML
//string

    if (ranQuote.year) {
        htmlStr += "<span class='year'>" + ranQuote.year + "</span>";
    }

// 5. After the two if statements, concatenate the closing </p>
// tag to the HTML string

    htmlStr += "</p>";

// 6. set the innerHTML of the quote-box div to equal the
// complete HTML string

    document.getElementById('quote-box').innerHTML = htmlStr;
}

/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener("click", printQuote);