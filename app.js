const bells = new Audio('./sounds/bell.wav');
const start_btn = document.querySelector('.btn-start');
const pause_btn = document.querySelector('.btn-pause');
const reset_btn = document.querySelector('.btn-reset');
const session = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

let my_interval;
let state = true;
let is_paused = false;
let total_seconds = 25 * 60; //timer starts at 25 minutes

const update_display = () => {
    let minutes_left = Math.floor(total_seconds / 60);
    let seconds_left = total_seconds % 60;

    session.textContent = minutes_left;
    seconds.textContent = seconds_left < 10 ? '0' + seconds_left : seconds_left;
};

const update_seconds = () => {
    if(!is_paused && total_seconds > 0){
        total_seconds--;

        update_display();

        if(total_seconds === 0){
            bells.play();
            clearInterval(my_interval);
            state = true;
            pause_btn.textContent = "Pause";
        }
    }
};

const app_timer = () => {
    if(state) {
        state = false;
        is_paused = false;
        total_seconds = Number.parseInt(session.textContent) * 60;
        update_display();
        my_interval = setInterval(update_seconds, 1000);
    }
    else {
        alert('Session has already started.');
    }
};

const pause_timer = () => {
    if(!state) {
        if(!is_paused){
            is_paused = true;
            pause_btn.textContent = "Resume";
        }
        else {
            is_paused = false;
            pause_btn.textContent = "Pause";
        }
    }
};

const reset_timer = () => {
    clearInterval(my_interval);
    state = true;
    is_paused = false;
    total_seconds = 25 * 60;
    update_display();
    pause_btn.textContent = "Pause";
}

start_btn.addEventListener('click', app_timer);
pause_btn.addEventListener('click', pause_timer);
reset_btn.addEventListener('click', reset_timer);