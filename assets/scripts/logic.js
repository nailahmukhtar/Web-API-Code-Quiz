// Selectors for main sections of the html
var timer = document.querySelector(".timer");
var startQuiz = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questionsScreen = document.querySelector("#questions");
var endScreen = document.querySelector("#end-screen");
var button = document.querySelector("button");
var finalScore = document.querySelector("#final-score");


//question Selectors
var questionElement = document.querySelector("#question-title");
var answerElement = document.querySelector("#choices");
var points = 0;
var pointCount = localStorage.getItem("pointCount");



//Starts Quiz Timer and Displays Questions
startQuiz.addEventListener("click", function(event) {
  if (event.target === startQuiz) {
    startScreen.setAttribute("class", "hide");
    questionsScreen.setAttribute("class", "start");
    setTime();
    start();
  } else {
    return;
  }
});


var secondsLeft = 75;
//function to set quiz timer
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0 || secondsLeft < 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      secondsLeft =0;
      // Calls function to create and append image
      endScreen.setAttribute("class", "start"); 
      questionsScreen.setAttribute("class", "hide");   
     } 
  }, 1000);
}


var currentQuestion = {};
var remainingQuestions = [];
var maxQuestions = questions.length;
var questionNum = 0;


function start(){
  questionNum = 0;
  remainingQuestions = [...questions];
  getNextQuestion();
}


function endGame() {
  questionsScreen.setAttribute("class", "hide");
  endScreen.setAttribute("class", "start"); 
  secondsLeft = 1;
  finalScore.textContent = points;

}

//function to retrieve next question
function getNextQuestion(){
  if(remainingQuestions.length === 0  || questionNum > maxQuestions) {
        endGame();

  } else {

  questionNum++;
  var questionIndex = Math.floor(Math.random() * remainingQuestions.length);
  currentQuestion = remainingQuestions[questionIndex];
  questionElement.textContent = currentQuestion.question;

  //loop through answers array to render them on page
  currentQuestion.answers.forEach(element => {
    var button = document.createElement("button");
    answerElement.appendChild(button);
    button.textContent = element.answerText;
    button.setAttribute("class", "start");
    button.dataset.isCorrect = element.isCorrect        
  });

  remainingQuestions.splice(questionIndex,1);
  }
}

//function to remove answers from previous question before next one renders
function removePreviousQuestion() {
  while (answerElement.firstChild) {
    answerElement.removeChild(answerElement.firstChild);
  }
}


choices.addEventListener("click", function(event) {

    chosenAnswer = event.target;
    if (chosenAnswer.dataset.isCorrect === "true") {
        points+=5;
        console.log(points);
        localStorage.setItem("pointCount", points);
        removePreviousQuestion()
        getNextQuestion()
    } else if (points > 5 && chosenAnswer.dataset.isCorrect === "false") {
        points-=5;
        if(secondsLeft < 10) {
          secondsLeft = 0;
        } else {
          secondsLeft -=10;
        }
        localStorage.setItem("pointCount", points);
        removePreviousQuestion()
        getNextQuestion()
    } else {
        points = 0;
        if(secondsLeft < 10) {
            secondsLeft = 0;
        } else {
            secondsLeft -=10;
        }
        localStorage.setItem("pointCount", points);
        removePreviousQuestion()
        getNextQuestion()
    }

})


function submitHighscore() {

  var initials = document.querySelector("#initials");
  localStorage.setItem("initials", initials.value);
  document.location.href = ('./highscores.html');

}
