var timerEl = document.getElementById('timer');
var allQuizSection = document.getElementById('allQuizQuestions')
var startQuizEl = document.getElementById('startQuiz');
var initalScreen = document.getElementById('introToQuiz');
var quizQuestionText = document.getElementById('quizQuestion');
var fullFinalScoreSection = document.getElementById('finalScoreSection');
//function
var clickButtonFunction = function(timeInterval) {
var buttonElOne = document.getElementById('answer1').addEventListener('click', function() {
    answerCheck1 = true;
    checkAnswer(timeInterval);
});
var buttonElTwo = document.getElementById('answer2').addEventListener('click', function() {
    answerCheck2 = true;
    checkAnswer(timeInterval);
});
var buttonElThree = document.getElementById('answer3').addEventListener('click', function() {
    answerCheck3 = true;
    checkAnswer(timeInterval);
});
var buttonElFour = document.getElementById('answer4').addEventListener('click', function() {
    answerCheck4 = true;
    checkAnswer(timeInterval);
});
};
clickButtonFunction();
var finalScoreText = document.getElementById('yourFinalScore')
var timeLeft = 100;
var questionCount = 0;
var answerCheck1 = 0;
var answerCheck2 = 0;
var answerCheck3 = 0;
var answerCheck4 = 0;
var totalScore = 0;

var enterNameForHighScore = function() {
var enterNameTextHighScore = document.createElement('p');
var nameNode = document.createTextNode('Enter Name:');
enterNameTextHighScore.appendChild(nameNode);
fullFinalScoreSection.appendChild(enterNameTextHighScore);

var createNameHighScore = document.createElement('input');
createNameHighScore.setAttribute('type', 'text');
createNameHighScore.setAttribute('id', 'inputNameHighScore');
fullFinalScoreSection.appendChild(createNameHighScore);

var submitHighScoreButton = document.createElement('BUTTON');
submitHighScoreButton.setAttribute = ('type', 'submit');
var submitNode = document.createTextNode('Submit');
submitHighScoreButton.appendChild (submitNode);
fullFinalScoreSection.appendChild(submitHighScoreButton);

}
// questions array
var questions = [
    // answer a2
    { q: 'Which of the following answers is Not a method for spanning multiple columns?', a1: 'grid-column: 8 / span 10', a2: 'grid-column: repeat(1, 3fr', a3: 'grid-column: 2/4', a4: 'grid-column: -1 / -3', correctA: 'grid-column: repeat(1, 3fr'},
    // answer a1
    { q: 'a', a1: 'correct', a2: 'not correct', a3: 'not correct', a4: 'not correct', correctA: 'correct'},
   //{ q: 'Which is an example of an Object in JavaScript?', a1: 'var obj = {'<br> 'name: "name"' <br> 'age: 23' <br> '};', a2: 'var obj {' <br> '=function obj;' <br> 'name = name;', a3: 'var obj = {' <br> 'name="name"' <br> 'return object', a4: 'var obj = function(newobject)'},
    // answer a3
    { q: 'b', a1: 'not correct', a2: 'not correct', a3: 'correct', a4: 'not correct', correctA: 'correct'},
    // answer a2
    { q: 'c', a1: 'correct', a2: 'not correct', a3: 'not correct', a4: 'not correct', correctA: 'correct'},
    // answer a3
    { q: 'd', a1: 'not correct', a2: 'not correct', a3: 'correct', a4: 'not correct', correctA: 'correct'}
]

//start screen function
var startScreen = function() {
    allQuizSection.style.display = 'none';
    fullFinalScoreSection.style.display = 'none';
    timerEl.textContent = 'Time Remaining: ' + timeLeft;
};

function countdown (timeInterval) {

    var timeInterval = setInterval(function() {

    if (totalScore > 0) {
    timerEl.texContent = "Game Over";
    clearInterval(timeInterval);
    
    } else {

     if (timeLeft > 0) {
    timerEl.textContent = 'Time Remaining: ' + timeLeft;
    timeLeft --;

    } else if (timeLeft === 0) {
    timerEl.textContent = 'Time Remaining: ' + timeLeft;
    initalScreen.style.display = 'none';
    allQuizSection.style.display = 'none';
    timeLeft = 0;
    timerEl.textContent = "Game Over";
    clearInterval(timeInterval);
    finalScore();
    } else {
        timeLeft = 0;
        timerEl.texContent = "Game Over";
        clearInterval(timeInterval);
        finalScore();
    }}
},1000);}


function initiateQuiz() {
    countdown();
    // hide start screen display questions screen
    initalScreen.style.display = 'none';
    allQuizSection.style.display = 'block';
    // questions
    for (var i = 0; i < questions.length; i++) {
    quizQuestionText.textContent = questions[i].q;
    answer1.textContent = questions[i].a1;
    answer2.textContent = questions[i].a2;
    answer3.textContent = questions[i].a3;
    answer4.textContent = questions[i].a4;  
        break;
    }
};


// check answer function
var checkAnswer = function(timeInterval) {
    for (var i = questionCount; i < questions.length; i++) {
        
        console.log(answer1)
    if (answerCheck1 === true || answerCheck2 === true || answerCheck3 === true || answerCheck4 === true) {

    if (answerCheck1 === true && questions[i].a1 === questions[i].correctA) {
        answerCheck1 = 0;
        alert('correct');
        questionCount = questionCount + 1;
        if (questionCount === questions.length) {
            finalScore(timeInterval);
        } else {
        contQuestions();
        };
        
    } else if (answerCheck2 === true && questions[i].a2 === questions[i].correctA) {
        answerCheck2 = 0;
        alert('correct')
        questionCount = questionCount + 1;
        if (questionCount === questions.length) {
            finalScore(timeInterval);
        } else {
        contQuestions();
        };

    } else if (answerCheck3 === true && questions[i].a3 === questions[i].correctA) {
        answerCheck3 = 0;
        alert('correct')
        questionCount = questionCount + 1;
        if (questionCount === questions.length) {
            finalScore(timeInterval);
        } else {
        contQuestions();
        };

    } else if (answerCheck4 === true && questions[i].a4 === questions[i].correctA) {
        alert('correct')
        answerCheck4 = 0;
        questionCount = questionCount + 1;
        if (questionCount === questions.length) {
            finalScore(timeInterval);
        } else {
        contQuestions();
        };

    } else if (answerCheck1 === true && questions[i].a1 !== questions[i].correctA) {
        answerCheck1 = 0;
        alert('incorrect')
        questionCount = questionCount + 1;
        timeLeft = timeLeft - 10;
        if (questionCount === questions.length) {
            finalScore(timeInterval);
        } else {
        contQuestions();
        };

    } else if (answerCheck2 === true && questions[i].a2 !== questions[i].correctA) {
        answerCheck2 = 0;
        alert('incorrect')
        questionCount = questionCount + 1;
        timeLeft = timeLeft - 10;
        if (questionCount === questions.length) {
            finalScore(timeInterval);
        } else {
        contQuestions();
        };

    } else if (answerCheck3 === true && questions[i].a3 !== questions[i].correctA) {
        answerCheck3 = 0;
        alert('incorrect')
        questionCount = questionCount + 1;
        timeLeft = timeLeft - 10;
        if (questionCount === questions.length) {
            finalScore(timeInterval);
        } else {
        contQuestions();
        };

    } else if (answerCheck4 === true && questions[i].a4 !== questions[i].correctA) {
        answerCheck4 = 0;
        alert('incorrect')
        questionCount = questionCount + 1;
        timeLeft = timeLeft - 10;
        if (questionCount === questions.length) {
            finalScore(timeInterval);
        } else {
        contQuestions();
        };

    } else {
        answerCheck1 = 0;
        answerCheck2 = 0;
        answerCheck3 = 0;
        answerCheck4 = 0;
        alert('incorrect')
        questionCount = questionCount + 1;
        timeLeft = timeLeft - 10;
        if (questionCount === questions.length) {
            finalScore(timeInterval);
        } else {
        contQuestions();
        };
    }} else {
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
};

function finalScore (timeInterval) {
    initalScreen.style.display = 'none';
    allQuizSection.style.display = 'none';
    fullFinalScoreSection.style.display = 'block';
    timerEl.textContent = 'Game Over';
    totalScore = timeLeft;
    alert(totalScore);
    clearInterval(timeInterval);
    finalScoreText.textContent = 'Your final score is ' + totalScore;
    enterNameForHighScore();
};



// while (questionCount > 0 && questionCount < questions.length) {

// };

// creat a questions array

// when start quiz button start timer

// when start quiz button hide intro t quiz section and disply all quiz questions

// when answered correctly new questions shown / display correct under question

// when answered incorrectly -10 seconds from time display incorect under question

// when all questions are answered or timer reaches zero end game

// when game over allow initals input to save score

// when view highscore is selected hide all sections except for the highscore section.

//activates start screen
startScreen();

startQuizEl.onclick = initiateQuiz;