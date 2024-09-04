var questionsData = [
  {
    question: "1. In programming, what is a 'bug'?",
    choices: ["A feature", "An error or flaw", "A security measure", "A type of loop"],
    answer: 1,
  },
  {
    question: "2. Which planet is known as the Red Planet?",
    choices: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: 0,
  },
  {
    question: "3. Which programming language is known as the 'language of the web'?",
    choices: ["Java", "Python", "C++", "JavaScript"],
    answer: 3,
  },
];

var questionElement = document.getElementById("question");
var scoreElement = document.getElementById("score");

var currentQuestionIndex = 0;
var score = 0;
var finalScore = null;
var optionBtnClicked;

function displayQuestion() {
  optionBtnClicked = false;
  changeBtnState();

  var currentQuestion = questionsData[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  document.getElementById("choice1").textContent = questionsData[currentQuestionIndex].choices[0];
  document.getElementById("choice2").textContent = questionsData[currentQuestionIndex].choices[1];
  document.getElementById("choice3").textContent = questionsData[currentQuestionIndex].choices[2];
  document.getElementById("choice4").textContent = questionsData[currentQuestionIndex].choices[3];

  scoreElement.textContent = "Score: " + score;
}

function checkAnswer(selectedOption) {
  optionBtnClicked = true;
  changeBtnState();

  if (selectedOption === questionsData[currentQuestionIndex].answer) {
    score++;

    alert("Correct");
  } else {
    alert(`Incorrect. The correct answer is option ${questionsData[currentQuestionIndex].answer + 1}.`);
  }
  scoreElement.textContent = "Score: " + score;


  if (currentQuestionIndex < questionsData.length - 1) {
    currentQuestionIndex++;
  } else {
    showResult();
  }
}

function nextQuestion() {
    displayQuestion();
}

function changeBtnState() {
  if (optionBtnClicked) {
    // disable btn after 1 click so user cannot select one mcq multipe times
    document.getElementById("choice1").disabled = true;
    document.getElementById("choice2").disabled = true;
    document.getElementById("choice3").disabled = true;
    document.getElementById("choice4").disabled = true;
    
    // cursor not allowed
    document.getElementById("choice1").style.cursor = "not-allowed";
    document.getElementById("choice2").style.cursor = "not-allowed";
    document.getElementById("choice3").style.cursor = "not-allowed";
    document.getElementById("choice4").style.cursor = "not-allowed";
  } else {
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
  }
}

function showResult() {
  document.getElementById("main-box").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("finalScore").textContent = "Your Score: " + score;
}
function playAgain() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("result").style.display = "none";
  document.getElementById("main-box").style.display = "block";
  displayQuestion();
}

displayQuestion();