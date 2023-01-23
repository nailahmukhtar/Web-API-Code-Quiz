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
    },
    {
    question: "How do you write 'Hello World' in an alert box?",
    answers: [
        {answerText: "msgBox('Hello Word')", isCorrect: false},
        {answerText: "msg('Hello World')", isCorrect: false},
        {answerText: "alertBox('Hello World')", isCorrect: false},
        {answerText: "alert('Hello World')", isCorrect: true}
        ]
    },
    {
    question: "How do you create a function in JavaScript?",
    answers: [
        {answerText: "function = myFunction()", isCorrect: false},
        {answerText: "function:myFunction()", isCorrect: false},
        {answerText: "function myFunction()", isCorrect: true},
        ]
    },
    {
    question: "How can you add a comment in a JavaScript?",
    answers: [
        {answerText: "<!-- Comment here -->", isCorrect: false},
        {answerText: "//This is a comment", isCorrect: true},
        {answerText: "''This is a comment", isCorrect: false},
        ]
    }
]

// function to randomly select question from array
function randomQuestion() {
    return Math.floor(Math.random() * questions.length);
  }




// setQuestion();
