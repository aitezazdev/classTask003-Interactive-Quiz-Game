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
var btnSelected = false;

function displayQuestion() {
  btnSelected = false;
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

  // Reset all buttons to enabled
  document.getElementById("choice1").disabled = false;
  document.getElementById("choice2").disabled = false;
  document.getElementById("choice3").disabled = false;
  document.getElementById("choice4").disabled = false;

  // reset the cursor to default
    document.getElementById("choice1").style.cursor = "pointer";
    document.getElementById("choice2").style.cursor = "pointer";
    document.getElementById("choice3").style.cursor = "pointer";
    document.getElementById("choice4").style.cursor = "pointer";

    if (currentQuestionIndex === data.length - 1) {
      document.getElementById("next").innerText = "Its Over";
    }
  }

function checkAnswer(selectedOption) {
  btnSelected = true;
  if (selectedOption === data[currentQuestionIndex].answer) {
    score++;
    alert("correct");
  } else {
    alert("Try Again!");
  }
  scoreElement.textContent = "Score: " + score;

  // Disable multipe clicks
  if (btnSelected) {
    document.getElementById("choice1").style.cursor = "not-allowed";
    document.getElementById("choice2").style.cursor = "not-allowed";
    document.getElementById("choice3").style.cursor = "not-allowed";
    document.getElementById("choice4").style.cursor = "not-allowed";

    document.getElementById("choice1").disabled = true;
    document.getElementById("choice2").disabled = true;
    document.getElementById("choice3").disabled = true;
    document.getElementById("choice4").disabled = true;
  }
}

function nextQuestion() {
  if (currentQuestionIndex < data.length - 1) {
    currentQuestionIndex++;
    displayQuestion();
  }
}

displayQuestion();
