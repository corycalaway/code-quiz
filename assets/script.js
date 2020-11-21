var timerEl = document.getElementById('timer');
var allQuizSection = document.getElementById('allQuizQuestions')
var timeLeft = 60;

// questions array
var questions = [
    // answer a2
    { q: 'Which of the following answers is Not a method for spanning multiple columns?', a1: 'grid-column: 8 / span 10', a2: 'grid-column: repeat(1, 3fr', a3: 'grid-column: 2/4', a4: 'grid-column: -1 / -3'},
    // answer a1
    { q: 'Which is an example of an Object in JavaScript', a1: 'var obj = {'<br> 'name: "name"' <br> 'age: 23' <br> '};', a2: 'var obj {' <br> '=function obj;' <br> 'name = name;', a3: 'var obj = {' <br> 'name="name"' <br> 'return object', a4: 'var obj = function(newobject)'},
    // answer a3
    { q: 'sdfkjdfadfjasljfa', a1: 'not correct', a2: 'not correct', a3: 'correct', a4: 'not correct'},
    // answer a2
    { q: 'sdfkjdfadfjasljfa', a1: 'correct', a2: 'not correct', a3: 'not correct', a4: 'not correct'},
    // answer a3
    { q: 'sdfkjdfadfjasljfa', a1: 'not correct', a2: 'not correct', a3: 'correct', a4: 'not correct'}
]

//start screen function
var startScreen = function() {
    timerEl.textContent = 'Time Remaining: ' + timeLeft;
    allQuizSection.style.display = 'none';

};

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