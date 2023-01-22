var userScore = localStorage.getItem("pointCount");

var highscores = document.querySelector('#highscores');
var item = document.createElement('li');
highscores.appendChild(item);
item.textContent = userScore;
