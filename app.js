const time = document.querySelector('#time');
const showedHours = document.querySelector('.hours');
const showedMinutes = document.querySelector('.minutes');
const showedSeconds = document.querySelector('.seconds');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const resetButton = document.querySelector('#reset');

let interval;
let hours = 0;
let minutes = 0;
let seconds = 0;

showedSeconds.innerHTML = '0' + seconds;
showedMinutes.innerHTML = '0' + minutes;
showedHours.innerHTML = '0' + hours;

document.addEventListener('click', (e) => {
    if (e.target == startButton) {
        clearInterval(interval);
        interval = setInterval(startTime, 1000);
    }
    if (e.target == pauseButton) {
        clearInterval(interval);
    }
    if (e.target == resetButton) {
        clearInterval(interval);
        
        resetTime();
    }
});


let startTime = () => {
    if (seconds <= 9) {
        showedSeconds.innerHTML = '0' + seconds;
    } else {
        showedSeconds.innerHTML = seconds;
    }

    if (minutes <= 9) {
        showedMinutes.innerHTML = '0' + minutes;
    } else {
        showedMinutes.innerHTML = minutes;
    }

    if (hours <= 9) {
        showedHours.innerHTML = '0' + hours;
    } else {
        showedHours.innerHTML = hours;
    }

    seconds++;

    if (seconds >= 59) {
        seconds = 0;
        minutes++;
        if (minutes >= 59) {
            hours++;
        }
    }
}
let resetTime = () => {
    hours = 0;
    minutes = 0;
    seconds = 0;

    showedSeconds.innerHTML = '0' + seconds;
    showedMinutes.innerHTML = '0' + minutes;
    showedHours.innerHTML = '0' + hours;
}
