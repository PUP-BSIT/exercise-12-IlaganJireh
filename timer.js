document.addEventListener("DOMContentLoaded", function () {
    let timer;
    let timerRunning = false;
    const timerDisplay = document.getElementById("timerDisplay");

document.getElementById("startButton").addEventListener("click", function () {
    if (!timerRunning) {
        let seconds = 0;
        timer = setInterval(function () {
            seconds++;
            timerDisplay.textContent = seconds;
        }, 1000);
        timerRunning = true;
    }
});
document.getElementById("pauseButton").addEventListener("click", function () {
    if (timerRunning) {
        clearInterval(timer);
        timerRunning = false;
    }
});

document.getElementById("resumeButton").addEventListener("click", function () {
    if (!timerRunning) {
        timer = setInterval(function () {
            let seconds = parseInt(timerDisplay.textContent);
            seconds++;
            timerDisplay.textContent = seconds;
        }, 1000);
        timerRunning = true;
    }
});
document.getElementById("stopButton").addEventListener("click", function () {
    clearInterval(timer);
    timerDisplay.textContent = 0;
    timerRunning = false;
});
});