var data = [
  {
    question: "1. In programming, what is a 'bug'?",
    choices: [
      "A feature",
      "An error or flaw",
      "A security measure",
      "A type of loop",
    ],
    answer: 1,
  },
  {
    question: "2. Which planet is known as the Red Planet?",
    choices: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: 1,
  },
  {
    question:
      "3. Which programming language is known as the 'language of the web'?",
    choices: ["Java", "Python", "C++", "JavaScript"],
    answer: 3,
  },
  {
    question: "4. What is the capital of France?",
    choices: ["London", "Berlin", "Paris", "Madrid"],
    answer: 2,
  },
  {
    question: "5. Which company developed the Android operating system?",
    choices: ["Apple", "Microsoft", "Google", "Samsung"],
    answer: 2,
  },
];

var questionElement = document.getElementById("question");
var scoreElement = document.getElementById("score");

var currentQuestionIndex = 0;
var score = 0;
var btnClicked;

function displayQuestion() {
  btnClicked = false;
  var currentQuestion = data[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  document.getElementById("choice1").textContent =
    data[currentQuestionIndex].choices[0];
  document.getElementById("choice2").textContent =
    data[currentQuestionIndex].choices[1];
  document.getElementById("choice3").textContent =
    data[currentQuestionIndex].choices[2];
  document.getElementById("choice4").textContent =
    data[currentQuestionIndex].choices[3];

    disableEnableBtns();

  if (currentQuestionIndex === data.length - 1) {
    document.getElementById("next").style.display = "none";
  }
}

function checkAnswer(selectedOption) {
  btnClicked = true;
  if (selectedOption === data[currentQuestionIndex].answer) {
    score++;
    alert("correct");
  } else {
    alert("Wrong!");
  }
  scoreElement.textContent = "Score: " + score;

  disableEnableBtns();
}

function nextQuestion() {
  if (currentQuestionIndex < data.length - 1) {
    currentQuestionIndex++;
    displayQuestion();
  }
}

function disableEnableBtns() {
  if (btnClicked) {
    // cursor not allowed
    document.getElementById("choice1").disabled = true;
    document.getElementById("choice2").disabled = true;
    document.getElementById("choice3").disabled = true;
    document.getElementById("choice4").disabled = true;

    // disable btn after 1 click so user cannot select one mcq multipe times
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

displayQuestion();
