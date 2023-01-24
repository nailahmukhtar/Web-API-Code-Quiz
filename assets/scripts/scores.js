//Assign variables
var highScores = JSON.parse(localStorage.getItem('highScores')) || JSON.parse('[]');
var userScore = localStorage.getItem("pointCount");
var userInitials = localStorage.getItem("initials");
var latestScore = userInitials + " " + userScore;

//only push scores to highScore array when it's not null
if (latestScore !== 'null null') {
    highScores.push(latestScore);
}

//set score to local storage as a string
localStorage.setItem('highScores',JSON.stringify(highScores));
// loop through array and create a list element to display all high scores in local storage
var highscoreElement = document.querySelector('#highscores');

    highScores.forEach(element => {
        var item = document.createElement('li');
        highscoreElement.appendChild(item);
        item.textContent = element;
    });

localStorage.setItem("initials", "null");
localStorage.setItem("pointCount", "null");


//clear score function
function clearScores() {
    localStorage.clear();
    highScores = [];
    while (highscoreElement.firstChild) {
        highscoreElement.removeChild(highscoreElement.firstChild);
      }
}