var timerEl = document.getElementById('timer');
var timeLeft = 60;

var countdown = function() {
    timerEl.textContent = 'Time Remaining: ' + timeLeft;
};

countdown();