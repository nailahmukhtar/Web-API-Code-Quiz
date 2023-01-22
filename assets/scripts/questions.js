var questionElement = document.querySelector("#question-title");
var answerElement = document.querySelector("#choices");

var questions = [
    {
    question: "Where is the correct place to insert a JavaScript?",
    answers: [
        {answerText: "<head> section", isCorrect: false},
        {answerText: "<head> or <body> sections", isCorrect: true},
        {answerText: "<body> section", isCorrect: false},
        ],
    },
    {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
        {answerText: "<javascript>", isCorrect: false},
        {answerText: "<script>", isCorrect: true},
        {answerText: "<scripting>", isCorrect: false},
        {answerText: "<js>", isCorrect: false}
        ]
    }
]

// function to randomly select question from array
function randomQuestion() {
    return Math.floor(Math.random() * questions.length);
  }

function setQuestion() {
    var pickRandomQuestion = randomQuestion();
    questionElement.textContent = questions[pickRandomQuestion].question;
    questions[pickRandomQuestion].answers.forEach(element => {
        var button = document.createElement("button");
        answerElement.appendChild(button);
        button.textContent = element.answerText;
        button.setAttribute("class", "start");
    })
}

setQuestion();
console.log("Hello");

