var timerEl = document.getElementById('timer');
var allQuizSection = document.getElementById('allQuizQuestions')
var startQuizEl = document.getElementById('startQuiz');
var initalScreen = document.getElementById('introToQuiz');
var quizQuestionText = document.getElementById('quizQuestion');
var buttonElOne = document.getElementById('answer1').addEventListener('click', function() {
    answer1 = true;
    checkAnswer();
});
var buttonElTwo = document.getElementById('answer2').addEventListener('click', function() {
    answer2 = true;
    checkAnswer();
});
var buttonElThree = document.getElementById('answer3').addEventListener('click', function() {
    answer3 = true;
    checkAnswer();
});
var buttonElFour = document.getElementById('answer4').addEventListener('click', function() {
    answer4 = true;
    checkAnswer();
});
var timeLeft = 60;

// questions array
var questions = [
    // answer a2
    { q: 'Which of the following answers is Not a method for spanning multiple columns?', a1: 'grid-column: 8 / span 10', a2: 'grid-column: repeat(1, 3fr', a3: 'grid-column: 2/4', a4: 'grid-column: -1 / -3', correctA: 'grid-column: repeat(1, 3fr'},
    // answer a1
    { q: 'a', a1: 'correct', a2: 'not correct', a3: 'not correct', a4: 'not correct'},
   //{ q: 'Which is an example of an Object in JavaScript?', a1: 'var obj = {'<br> 'name: "name"' <br> 'age: 23' <br> '};', a2: 'var obj {' <br> '=function obj;' <br> 'name = name;', a3: 'var obj = {' <br> 'name="name"' <br> 'return object', a4: 'var obj = function(newobject)'},
    // answer a3
    { q: 'b', a1: 'not correct', a2: 'not correct', a3: 'correct', a4: 'not correct'},
    // answer a2
    { q: 'c', a1: 'correct', a2: 'not correct', a3: 'not correct', a4: 'not correct'},
    // answer a3
    { q: 'd', a1: 'not correct', a2: 'not correct', a3: 'correct', a4: 'not correct'}
]

//start screen function
var startScreen = function() {
    timerEl.textContent = 'Time Remaining: ' + timeLeft;
    allQuizSection.style.display = 'none';

};

function initiateQuiz() {
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

var checkAnswer = function() {
    if (answer1 === true || answer2 === true) {
        alert('test');
    } else {
        alert('oops');
    }
}

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