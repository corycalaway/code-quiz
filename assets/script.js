var timerEl = document.getElementById("timer");
var allQuizSection = document.getElementById("allQuizQuestions");
var startQuizEl = document.getElementById("startQuiz");
var initalScreen = document.getElementById("introToQuiz");
var quizQuestionText = document.getElementById("quizQuestion");
var fullFinalScoreSection = document.getElementById("finalScoreSection");
var highScoreSection = document.getElementById("highScoresViewSection");
var highScore1Top = document.getElementById("highScore1");
var highScore2Top = document.getElementById("highScore2");
var highScore3Top = document.getElementById("highScore3");
var hideHeaderSection = document.getElementById("hideHeader");
var linkHighScores = document
  .getElementById("highScoresLink")
  .addEventListener("click", function () {
    viewHighScores();
  });
//function
var clickButtonFunction = function (timeInterval) {
  var buttonElOne = document
    .getElementById("answer1")
    .addEventListener("click", function () {
      answerCheck1 = true;
      checkAnswer(timeInterval);
    });
  var buttonElTwo = document
    .getElementById("answer2")
    .addEventListener("click", function () {
      answerCheck2 = true;
      checkAnswer(timeInterval);
    });
  var buttonElThree = document
    .getElementById("answer3")
    .addEventListener("click", function () {
      answerCheck3 = true;
      checkAnswer(timeInterval);
    });
  var buttonElFour = document
    .getElementById("answer4")
    .addEventListener("click", function () {
      answerCheck4 = true;
      checkAnswer(timeInterval);
    });
};
clickButtonFunction();
var finalScoreText = document.getElementById("yourFinalScore");
var timeLeft = 100;
var questionCount = 0;
var answerCheck1 = 0;
var answerCheck2 = 0;
var answerCheck3 = 0;
var answerCheck4 = 0;
var totalScore = 0;
var localStorageArray = [];

// load saved data
var loadSavedData = function (taskDataObj) {
  localStorageArray = localStorage.getItem("localStorageArray");

  if (!localStorageArray) {
    localStorageArray = [];
    return false;
  }
  localStorageArray = JSON.parse(localStorageArray);
};

// enter highscore info
var enterNameForHighScore = function () {
  var enterNameTextHighScore = document.createElement("p");
  var nameNode = document.createTextNode("Enter Name:");
  enterNameTextHighScore.appendChild(nameNode);
  fullFinalScoreSection.appendChild(enterNameTextHighScore);

  var createNameHighScore = document.createElement("input");
  createNameHighScore.setAttribute("type", "text");
  createNameHighScore.setAttribute("id", "inputNameHighScore");
  createNameHighScore.setAttribute("value", "");
  fullFinalScoreSection.appendChild(createNameHighScore);

  var submitHighScoreButton = document.createElement("BUTTON");
  submitHighScoreButton.setAttribute = ("type", "submit");
  var submitNode = document.createTextNode("Submit");
  submitHighScoreButton.appendChild(submitNode);
  fullFinalScoreSection.appendChild(submitHighScoreButton);

  submitHighScoreButton.addEventListener("click", function () {
    taskDataObj.storeName = createNameHighScore.value;
    taskDataObj.storeScore = totalScore;
    submitHighScoreButton.remove();
    submitNode.remove();
    createNameHighScore.remove();
    enterNameTextHighScore.remove();

    localStorage.setItem(
      "localStorageArray",
      JSON.stringify(localStorageArray)
    );
    viewHighScores();
  });
};
// questions array
var questions = [
  // answer a2
  {
    q:
      "Which of the following answers is Not a method for spanning multiple columns?",
    a1: "grid-column: 8 / span 10",
    a2: "grid-column: repeat(1, 3fr",
    a3: "grid-column: 2/4",
    a4: "grid-column: -1 / -3",
    correctA: "grid-column: repeat(1, 3fr",
  },
  // answer a1
  {
    q: "A boolean is another term for binary",
    a1: "False",
    a2: "True",
    a3: "Sometimes",
    a4: "A boolean is used to apply numbers to variables",
    correctA: "False",
  },
  //{ q: 'Which is an example of an Object in JavaScript?', a1: 'var obj = {'<br> 'name: "name"' <br> 'age: 23' <br> '};', a2: 'var obj {' <br> '=function obj;' <br> 'name = name;', a3: 'var obj = {' <br> 'name="name"' <br> 'return object', a4: 'var obj = function(newobject)'},
  // answer a3
  {
    q: "b",
    a1: "not correct",
    a2: "not correct",
    a3: "correct",
    a4: "not correct",
    correctA: "correct",
  },
  // answer a2
  {
    q: "c",
    a1: "correct",
    a2: "not correct",
    a3: "not correct",
    a4: "not correct",
    correctA: "correct",
  },
  // answer a3
  {
    q: "d",
    a1: "not correct",
    a2: "not correct",
    a3: "correct",
    a4: "not correct",
    correctA: "correct",
  },
];


var viewHighScores = function () {
  allQuizSection.style.display = "none";
  fullFinalScoreSection.style.display = "none";
  fullFinalScoreSection.style.display = "none";
  initalScreen.style.display = "none";
  hideHeaderSection.style.display = "none";
  highScoreSection.style.display = "block";
  var returnHomePage = document.createElement("Button");
  returnHomePage.setAttribute = ("type", "submit");
  var returnNode = document.createTextNode("Return to quiz");
  returnHomePage.appendChild(returnNode);
  highScoreSection.appendChild(returnHomePage);

  returnHomePage.addEventListener("click", function () {
    returnHomePage.remove();
    startScreen();
  localStorageArray.sort(function (a, b) {
    return parseFloat(b["storeScore"]) - parseFloat(a["storeScore"]);
  })[0]["storeName"];

  highScore1Top.textContent =
    localStorageArray[0].storeName +
    " Total Points: " +
    localStorageArray[0].storeScore;
  highScore2Top.textContent =
    localStorageArray[1].storeName +
    " Total Points: " +
    localStorageArray[1].storeScore;
  highScore3Top.textContent =
    localStorageArray[2].storeName +
    " Total Points: " +
    localStorageArray[2].storeScore;

  
  });
};

//start screen function
var startScreen = function () {
  initalScreen.style.display = "block";
  hideHeaderSection.style.display = "flex";
  hideHeaderSection.style.justifyContent = "space-between";
  allQuizSection.style.display = "none";
  fullFinalScoreSection.style.display = "none";
  highScoreSection.style.display = "none";

  timerEl.textContent = "Time Remaining: " + timeLeft;
  loadSavedData();
};

function countdown(timeInterval) {
  var timeInterval = setInterval(function () {
    if (totalScore > 0) {
      timerEl.texContent = "Game Over";
      clearInterval(timeInterval);
    } else {
      if (timeLeft > 0) {
        timerEl.textContent = "Time Remaining: " + timeLeft;
        timeLeft--;
      } else if (timeLeft === 0) {
        timerEl.textContent = "Time Remaining: " + timeLeft;
        initalScreen.style.display = "none";
        allQuizSection.style.display = "none";
        timeLeft = 0;
        timerEl.textContent = "Game Over";
        clearInterval(timeInterval);
        finalScore();
      } else {
        timeLeft = 0;
        timerEl.texContent = "Game Over";
        clearInterval(timeInterval);
        finalScore();
      }
    }
  }, 1000);
}

function initiateQuiz() {
  timeLeft = 100;
  questionCount = 0;
  answerCheck1 = 0;
  answerCheck2 = 0;
  answerCheck3 = 0;
  answerCheck4 = 0;
  totalScore = 0;
  localStorageArray.push(taskDataObj);
  countdown();
  // hide start screen display questions screen
  initalScreen.style.display = "none";
  allQuizSection.style.display = "block";
  // questions
  for (var i = 0; i < questions.length; i++) {
    quizQuestionText.textContent = questions[i].q;
    answer1.textContent = questions[i].a1;
    answer2.textContent = questions[i].a2;
    answer3.textContent = questions[i].a3;
    answer4.textContent = questions[i].a4;
    break;
  }
}

// check answer function
var checkAnswer = function (timeInterval) {
  for (var i = questionCount; i < questions.length; i++) {
    if (
      answerCheck1 === true ||
      answerCheck2 === true ||
      answerCheck3 === true ||
      answerCheck4 === true
    ) {
      if (answerCheck1 === true && questions[i].a1 === questions[i].correctA) {
        answerCheck1 = 0;
        alert("correct");
        questionCount = questionCount + 1;
        if (questionCount === questions.length) {
          finalScore(timeInterval);
        } else {
          contQuestions();
        }
      } else if (
        answerCheck2 === true &&
        questions[i].a2 === questions[i].correctA
      ) {
        answerCheck2 = 0;
        alert("correct");
        questionCount = questionCount + 1;
        if (questionCount === questions.length) {
          finalScore(timeInterval);
        } else {
          contQuestions();
        }
      } else if (
        answerCheck3 === true &&
        questions[i].a3 === questions[i].correctA
      ) {
        answerCheck3 = 0;
        alert("correct");
        questionCount = questionCount + 1;
        if (questionCount === questions.length) {
          finalScore(timeInterval);
        } else {
          contQuestions();
        }
      } else if (
        answerCheck4 === true &&
        questions[i].a4 === questions[i].correctA
      ) {
        alert("correct");
        answerCheck4 = 0;
        questionCount = questionCount + 1;
        if (questionCount === questions.length) {
          finalScore(timeInterval);
        } else {
          contQuestions();
        }
      } else if (
        answerCheck1 === true &&
        questions[i].a1 !== questions[i].correctA
      ) {
        answerCheck1 = 0;
        alert("incorrect");
        questionCount = questionCount + 1;
        timeLeft = timeLeft - 10;
        if (questionCount === questions.length) {
          finalScore(timeInterval);
        } else {
          contQuestions();
        }
      } else if (
        answerCheck2 === true &&
        questions[i].a2 !== questions[i].correctA
      ) {
        answerCheck2 = 0;
        alert("incorrect");
        questionCount = questionCount + 1;
        timeLeft = timeLeft - 10;
        if (questionCount === questions.length) {
          finalScore(timeInterval);
        } else {
          contQuestions();
        }
      } else if (
        answerCheck3 === true &&
        questions[i].a3 !== questions[i].correctA
      ) {
        answerCheck3 = 0;
        alert("incorrect");
        questionCount = questionCount + 1;
        timeLeft = timeLeft - 10;
        if (questionCount === questions.length) {
          finalScore(timeInterval);
        } else {
          contQuestions();
        }
      } else if (
        answerCheck4 === true &&
        questions[i].a4 !== questions[i].correctA
      ) {
        answerCheck4 = 0;
        alert("incorrect");
        questionCount = questionCount + 1;
        timeLeft = timeLeft - 10;
        if (questionCount === questions.length) {
          finalScore(timeInterval);
        } else {
          contQuestions();
        }
      } else {
        answerCheck1 = 0;
        answerCheck2 = 0;
        answerCheck3 = 0;
        answerCheck4 = 0;
        alert("incorrect");
        questionCount = questionCount + 1;
        timeLeft = timeLeft - 10;
        if (questionCount === questions.length) {
          finalScore(timeInterval);
        } else {
          contQuestions();
        }
      }
    } else {
      break;
    }
  }
};

function contQuestions() {
  // questions
  for (var i = questionCount; i < questions.length; i++) {
    quizQuestionText.textContent = questions[i].q;
    answer1.textContent = questions[i].a1;
    answer2.textContent = questions[i].a2;
    answer3.textContent = questions[i].a3;
    answer4.textContent = questions[i].a4;
    return;
  }
}

function finalScore(timeInterval) {
  initalScreen.style.display = "none";
  allQuizSection.style.display = "none";
  fullFinalScoreSection.style.display = "block";
  timerEl.textContent = "Game Over";
  totalScore = timeLeft;
  alert(totalScore);
  clearInterval(timeInterval);
  finalScoreText.textContent = "Your final score is " + totalScore;
  enterNameForHighScore();
}

var taskDataObj = {
  storeName: 0,
  storeScore: 0,
};
//activates start screen
startScreen();

startQuizEl.onclick = initiateQuiz;
