// character counter functionality

/* global document */

$(document).ready(function() {

  console.log("I'm ready");

  //Define varibles + obtain DOM components

  let textArea = document.getElementById("tweet-string");

  let characterCounter = document.getElementById("counter");

  const maxCharacters = 140;


  // logic for counting characters...

  // psuedocode:

  // calculate the number of characters entered into the text are

  // calculate the number of characters left

  // display this number in the output tag

  const countCharacters = (e) => {

    let numOfEnteredChars = e.target.value.length;

    let counter = maxCharacters - numOfEnteredChars;

    characterCounter.innerHTML = counter;

    if (counter < 0) {

      document.getElementById("counter").setAttribute("style", "color: red;");

    } else {

      document.getElementById("counter").setAttribute("style", "color: black;");

    }
  
  };

  // add event listener to call method when a char is added or removed
  
  textArea.addEventListener("keyup", countCharacters);

});
