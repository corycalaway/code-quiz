var timerEl = document.getElementById('timer');
var allQuizSection = document.getElementById('allQuizQuestions')
var timeLeft = 60;

var startScreen = function() {
    timerEl.textContent = 'Time Remaining: ' + timeLeft;
    allQuizSection.style.display = 'none';

};


startScreen();