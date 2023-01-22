// Selects element by class
var timer = document.querySelector(".timer");
var startQuiz = document.querySelector("#start");

var secondsLeft = 76;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      console.log('timer ended');
    }

  }, 1000);
}

startQuiz.addEventListener("click", function(event) {
  if (event.target === startQuiz) {
    setTime();
  } else {
    return;
  }

});
