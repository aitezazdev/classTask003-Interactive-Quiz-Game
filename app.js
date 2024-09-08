var questionsData = [
  {
    question: "1. In programming, what is a 'bug'?",
    choices: ["A feature", "An error or flaw", "A security measure", "A type of loop",
    ],
     answerIndex: 1,
  },
  {
    question: "2. Which programming language is known as the 'language of the web'?",
    choices: ["Java", "Python", "C++", "JavaScript"],
     answerIndex: 3,
  },
  {
    question: "3. What does CSS primarily control on a website?",
    choices: ["Structure", "Content", "Styling", "Database"],
    answerIndex: 2,
  },
];

var scoreElement = document.getElementById("score");

var currentQuestionIndex = 0;
var score = 0;
var answerSubmitted = false;

// Displays new Question
function displayQuestion() {
  answerSubmitted = false;

  document.getElementById("question").textContent = questionsData[currentQuestionIndex].question;

  for (var i = 1; i <= 4; i++) {
    var choiceElement = document.getElementById(`choice${i}`);
    choiceElement.textContent = questionsData[currentQuestionIndex].choices[i-1];
    choiceElement.style.backgroundColor = 'transparent';
    choiceElement.style.backgroundColor = "transparent";
    choiceElement.style.borderColor = "#3498db";
    choiceElement.style.color = "#3498db";
  }

  scoreElement.textContent = "Score: " + score;
  enableButtons();
}

// For Checking Answer
function checkAnswer(selectedOption) {
  if (answerSubmitted) return;

  answerSubmitted = true;
  
  var correctAnswer = questionsData[currentQuestionIndex].answerIndex;
  // Always show the correct answer in greeen
  var correctButton = document.getElementById(`choice${correctAnswer + 1}`);
    correctButton.style.backgroundColor = "#2ecc71";
    correctButton.style.borderColor = "#2ecc71";
    correctButton.style.color = "#ffffff";

  if (selectedOption === correctAnswer) {
    score++;
  } else {
    var incorrectButton = document.getElementById(`choice${selectedOption + 1}`);
        incorrectButton.style.backgroundColor = "#e74c3c";
        incorrectButton.style.borderColor = "#e74c3c";
        incorrectButton.style.color = "#ffffff";
  }
  scoreElement.textContent = "Score: " + score;
  disableButtons();

  if (currentQuestionIndex < questionsData.length - 1) {
    currentQuestionIndex++;
  } else {
    showResult();
  }
}

// Next Question
function nextQuestion() {
  displayQuestion();
}

// Handle option press with keyboard
function handleKeyPress(event) {
  if (answerSubmitted) {
    return;
  } else {
    if (event.key === "1") {
      checkAnswer(0);
    } else if (event.key === "2") {
      checkAnswer(1);
    } else if (event.key === "3") {
      checkAnswer(2);
    } else if (event.key === "4") {
      checkAnswer(3);
    }
  };
  }

function mouseOver(btn){
  if(!answerSubmitted){
    btn.style.backgroundColor = '#d3d3d3';
  }
}

function mouseOut(btn){
  if (!answerSubmitted) {
    btn.style.backgroundColor = 'transparent';
  }
}

// Disable option btns when answer is clicked
function disableButtons() {
  for (var i = 1; i <= 4; i++) {
    document.getElementById(`choice${i}`).disabled = true;
    document.getElementById(`choice${i}`).style.cursor = "not-allowed";
  }
}

// enable option btns when moved to next question
function enableButtons() {
  for (var i = 1; i <= 4; i++) {
    document.getElementById(`choice${i}`).disabled = false;
    document.getElementById(`choice${i}`).style.cursor = "pointer";
  }
}

// Shows Result
function showResult() {
  document.getElementById("main-box").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("finalScore").textContent = `YOur Score : ${score} / ${questionsData.length}`;
}

// Play Again
function playAgain() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("result").style.display = "none";
  document.getElementById("main-box").style.display = "block";
  displayQuestion();
}

displayQuestion();