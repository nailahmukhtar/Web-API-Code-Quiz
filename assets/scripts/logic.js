// Selectors for main sections of the html
var timer = document.querySelector(".timer");
var startQuiz = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questionsScreen = document.querySelector("#questions");
var endScreen = document.querySelector("#end-screen");
var button = document.querySelector("button");

//question Selectors
var questionElement = document.querySelector("#question-title");
var answerElement = document.querySelector("#choices");
var points = 0;
var pointCount = localStorage.getItem("pointCount");


var secondsLeft = 10;

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

//Starts Quiz Timer and Displays Questions
startQuiz.addEventListener("click", function(event) {
  if (event.target === startQuiz) {
    startScreen.setAttribute("class", "hide");
    questionsScreen.setAttribute("class", "start");
    setTime();
    setQuestion();
  } else {
    return;
  }

});

function setQuestion() {
  var pickRandomQuestion = randomQuestion();
  questionElement.textContent = questions[pickRandomQuestion].question;
  
  //loop through answers for question and render on page
  questions[pickRandomQuestion].answers.forEach(element => {
      var button = document.createElement("button");
      answerElement.appendChild(button);
      button.textContent = element.answerText;
      button.setAttribute("class", "start");
      //if answer is correct, add data attribute
      button.dataset.isCorrect = element.isCorrect        
      //listen to answer click event
      button.addEventListener("click", function(event) {
          chosenAnswer = event.target;
          if (chosenAnswer.dataset.isCorrect === "true") {
              points+=5;
              console.log(points);
              localStorage.setItem("pointCount", points);
          } else {
              points-=5;
              secondsLeft -=10;
              localStorage.setItem("pointCount", points);
          }

        })
    })
}
