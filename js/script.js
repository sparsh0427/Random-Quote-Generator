/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

// Following is an array of objects that has all the quotes that the webpage would be displaying

let quotes = [
  {
    quote: " The purpose of our lives is to be happy. ",
    source: "Dalai Lama",
    citation: "The Dalai Lama Book of Quotes"
  },
  {
    quote: " Life is what happens when you’re busy making other plans.",
    source: "John Lennon",
    citation: "John Lennon: The Life",
    year: "1967",
    tag: "Life"

  },
  {
    quote: " You only live once, but if you do it right, once is enough. ",
    source: "Mae West",
    citation: "Klondike Annie",
    year: "1936",
    tag: "Love"

  },
  {
    quote: " If you want to live a happy life, tie it to a goal, not to people or things. ",
    source: "Albert Einstein",
    year: "1925"
  },
  {
    quote: " Never let the fear of striking out keep you from playing the game. ",
    source: "Babe Ruth"
  },
  {
    quote: " Money and success don’t change people; they merely amplify what is already there. ",
    source: "Will Smith"
  },
  {
    quote: " Not how long, but how well you have lived is the main thing.",
    source: "Seneca"
  }
];

// An array with different hexadecimal color codes .

let color = ["#FF5733","#FFBD33","#DBFF33","#75FF33","#33FF57","#33FFBD","#FF044A"];


//This function chooses a random index that would be later used to display a random bg color on the webpage

function getRandomColor(){
  let index_c = Math.floor(Math.random() * 7 );
  return index_c;
}

/***
 * `getRandomQuote` function
***/

//The following function would choose a radom object from the array of objects created earlier

function getRandomQuote(){
  let index = Math.floor(Math.random() * 7 );
  return quotes[index]; 
}




/***
 * `printQuote` function
***/

//Te following function is ultimately used to show the changes made on the webpage everytime the user clicks on the button

function printQuote(){
  let quote = getRandomQuote();    //calls the function to randomly get an object
  console.log(typeof(quote));
  let html = '<p class="quote">'+quote.quote+'</p>'+'<p class="source">'+quote.source; // a string that has all the changes being made
  if(quote.hasOwnProperty("citation") && !(quote.hasOwnProperty('year'))){  //if the object has property "citation " then the html string should be modified this way
    console.log("True");
    html = html + '<span class="citation">'+quote.citation+'</span></p>';
  }
  if(quote.hasOwnProperty('year') && !quote.hasOwnProperty('citation')){   //if the object has property "year" then the html string should be modified this way
    html = html + '<span class="year">'+quote.year+'</span></p>';
  }
  if(quote.hasOwnProperty('year') && quote.hasOwnProperty('citation')){    //if the object has property "citation" and "year" then the html string should be modified this way
    html = html + '<span class="citation">'+quote.citation+'</span><span class="year">'+quote.year+'</span><span class="tag">'+quote.tag+'</span></p>';
  }

  let ii = getRandomColor();   //calls the function to randomly get an index from the color array.
  
  //<!stack overflow> - 
  document.querySelector("body").style.background = color[ii];  //it modifies the body tag by adding background color from the randomly selected array of colors.
  
  
  document.getElementById('quote-box').innerHTML = html;  // it finally modifies the html code to display all the changes being made on the webpage and the quote that has been randomly selected by the computer

}

let myVar = setInterval(printQuote,10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);