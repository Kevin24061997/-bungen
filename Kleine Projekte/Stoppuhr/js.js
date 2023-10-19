let startTime;
let timerId;

document.getElementById("start-button").addEventListener("click", startTimer);
document.getElementById("stop-button").addEventListener("click", stopTimer);
document.getElementById("reset-button").addEventListener("click", resetTimer);

function startTimer() {
    startTime = new Date();
    timerId = setInterval(updateTimer, 10);
}

function stopTimer() {
    clearInterval(timerId);
}

function resetTimer() {
    stopTimer();
    document.getElementById("timer").innerHTML = "00:00:00";
}

function updateTimer() {
    let currentTime = new Date();
    let elapsedTime = new Date(currentTime - startTime);
    let minutes = elapsedTime.getMinutes();
    let seconds = elapsedTime.getSeconds();
    let milliseconds = elapsedTime.getMilliseconds();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    milliseconds = milliseconds < 100 ? "0" + milliseconds : milliseconds;
    document.getElementById("timer").innerHTML = minutes + ":" + seconds + ":" + milliseconds;
}