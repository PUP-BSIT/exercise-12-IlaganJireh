document.addEventListener("DOMContentLoaded", function () {
    let timer;
    let timerRunning = false;
    const timerDisplay = document.getElementById("timerdisplay");

function startTimer() {
    let seconds = 0;
    timer = setInterval(function () {
        seconds++;
        timerDisplay.textContent = seconds;
    }, 1000);
        timerRunning = true;
}

document.getElementById("startbutton")
.addEventListener("click", function () {
        if (!timerRunning) {
            startTimer();
    }
});

document.getElementById("pausebutton")
.addEventListener("click", function () {
        if (timerRunning) {
            clearInterval(timer);
            timerRunning = false;
        }
    });

document.getElementById("resumebutton")
.addEventListener("click", function () {
        if (!timerRunning) {
            startTimer();
        }
    });

document.getElementById("stopbutton")
.addEventListener("click", function () {
        clearInterval(timer);
        timerDisplay.textContent = 0;
        timerRunning = false;
    });
});
