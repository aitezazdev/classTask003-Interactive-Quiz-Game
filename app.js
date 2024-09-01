var data = [
  { question: "1. what is 2 + 2?", choices: ["3", "4", "5", "6"], answer: 1 },
  {
    question: "2. my name is?",
    choices: ["zaz", "khan", "bro", "aitezaz"],
    answer: 3,
  },
  {
    question: "2. best film?",
    choices: ["The dark knight", "Interstellar", "Inception", "no one"],
    answer: 0,
  },
];

var question = document.getElementById("question");
var scoreElement = document.getElementById("score");

var currentQuestionIndex = 0;
var score = 0;

function displayQuestion() {
  var currentQuestion = data[currentQuestionIndex];
  question.textContent = currentQuestion.question;

  document.getElementById("choice1").textContent =
    data[currentQuestionIndex].choices[0];
  document.getElementById("choice2").textContent =
    data[currentQuestionIndex].choices[1];
  document.getElementById("choice3").textContent =
    data[currentQuestionIndex].choices[2];
  document.getElementById("choice4").textContent =
    data[currentQuestionIndex].choices[3];

  scoreElement.textContent = "Score: " + score;

  if (currentQuestionIndex === data.length - 1) {
    document.getElementById("next").innerText = "Its Over";
  }
}

function checkAnswer(selectedOption) {
  if (selectedOption === data[currentQuestionIndex].answer) {
    score++;
    alert("correct");
  } else {
    alert("wrong");
  }
  scoreElement.textContent = "Score: " + score;
}

function nextQuestion() {
  if (currentQuestionIndex < data.length - 1) {
    currentQuestionIndex++;
    displayQuestion();
  }
}

displayQuestion();
