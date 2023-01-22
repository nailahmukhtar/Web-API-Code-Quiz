// Selects element by class
var timer = document.querySelector(".timer");
var startQuiz = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questionsScreen = document.querySelector("#questions");
var endScreen = document.querySelector("#end-screen");

var secondsLeft = 5;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
        endScreen.setAttribute("class", "start"); 
        questionsScreen.setAttribute("class", "hide");   
      }

  }, 1000);
}

startQuiz.addEventListener("click", function(event) {
  if (event.target === startQuiz) {
    startScreen.setAttribute("class", "hide");
    questionsScreen.setAttribute("class", "start");
    setTime();
  } else {
    return;
  }

});
