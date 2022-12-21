//Home Page!
let catText = document.querySelector(".cat-text");
let homePage = document.querySelector(".home");

//Questions
let questionOne = document.querySelector(".question1");
let questionTwo = document.querySelector(".question2");
let questionThree = document.querySelector(".question3");
let questionFour = document.querySelector(".question4");

//Buttons
let startButton = document.querySelector(".start-button");
let resetButton = document.querySelector(".reset-button");

let buttonOne = document.querySelector(".button1");
let buttonTwo = document.querySelector(".button2");
let buttonThree = document.querySelector(".button3");
let buttonFour = document.querySelector(".button4");
let buttonFive = document.querySelector(".button5");
let buttonSix = document.querySelector(".button6");
let buttonSeven = document.querySelector(".button7");
let buttonEight = document.querySelector(".button8");

//Result Options!
let resultOne = document.querySelector(".result1")
let resultTwo = document.querySelector(".result2")
let resultThree = document.querySelector(".result3")

//Total score for each question
let totalScoreOne;
let totalScoreTwo;
let totalScoreThree;
let totalScoreFour;
let finalScore;

//Transitions 
startButton.onclick = function() {
  catText.style.display = "none"
  startButton.style.display = "none"
  questionOne.style.display = "block"
}

buttonOne.onclick = function() {
  totalScoreOne = 1;
  console.log(totalScoreOne);
  questionOne.style.display = "none"
  questionTwo.style.display = "block"
}

buttonTwo.onclick = function() {
  totalScoreOne = 3;
  console.log(totalScoreOne);
  questionOne.style.display = "none"
  questionTwo.style.display = "block"
}

buttonThree.onclick = function() {
  totalScoreTwo = 2;
  console.log(totalScoreTwo);
  questionTwo.style.display = "none"
  questionThree.style.display = "block"
}

buttonFour.onclick = function() {
  totalScoreTwo = 1;
  console.log(totalScoreTwo);
  questionTwo.style.display = "none"
  questionThree.style.display = "block"
}

buttonFive.onclick = function() {
  totalScoreThree = 1;
  console.log(totalScoreThree);
  questionThree.style.display = "none"
  questionFour.style.display = "block"
}

buttonSix.onclick = function() {
  totalScoreThree = 4;
  console.log(totalScoreThree);
  questionThree.style.display = "none"
  questionFour.style.display = "block"
}

//Result -- because these are the last questions, when clicked, they should bring you to the results page.

buttonSeven.onclick = function() {
  totalScoreFour = 1;
  questionFour.style.display = "none"
  console.log(totalScoreFour);
  finalScore = totalScoreOne + totalScoreTwo + totalScoreThree + totalScoreFour
  console.log(finalScore);

  //Totaling up the final points and matching it with each result page
  if (finalScore >= 4 && finalScore <= 6) {
    resultOne.style.display = "block"
  }

  if (finalScore >= 7 && finalScore <= 8) {
    resultTwo.style.display = "block"
  }

  if (finalScore >= 9 && finalScore <= 11) {
    resultThree.style.display = "block"
  }
}

buttonEight.onclick = function() {
  totalScoreFour = 2;
  questionFour.style.display = "none"
  console.log(totalScoreFour);
  finalScore = totalScoreOne + totalScoreTwo + totalScoreThree + totalScoreFour
  console.log(finalScore);


  //Totaling up the final points and matching it with each result page
  if (finalScore >= 4 && finalScore <= 5) {
    resultOne.style.display = "block"
  }

  else if (finalScore >= 6 && finalScore <= 8) {
    resultTwo.style.display = "block"
  }

  else if (finalScore >= 9 && finalScore <= 11) {
    resultThree.style.display = "block"
  }
}

//Reset Button
resetButton.onclick = function() {
  window.location.reload()
}