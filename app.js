const bells = new Audio('./sounds/bell.wav');
const start_btn = document.querySelector('.btn-start');
const session = document.querySelector('.minutes');
let my_interval;
let state = true;

const app_timer = () => {
    const session_amount = Number.parseInt(session.textContent)

    if(state) {
        state = false;
        let total_seconds = session_amount * 60;

        const update_seconds = () => {
            const minute_div = document.querySelector('.minutes');
            const second_div = document.querySelector('.seconds');

            total_seconds--;

            let minutes_left = Math.floor(total_seconds/60);
            let seconds_left = total_seconds % 60;

            if(seconds_left < 10) {
                second_div.textContent = '0' + seconds_left;
            }
            else {
                second_div.textContent = seconds_left;
            }
            minute_div.textContent = `${minutes_left}`

            if(minutes_left === 0 && seconds_left === 0) {
                bells.play()
                clearInterval(my_interval);
            }
        }
        my_interval = setInterval(update_seconds, 1000);
    }
    else {
        alert('Session has already started.')
    }
}

start_btn.addEventListener('click', app_timer);