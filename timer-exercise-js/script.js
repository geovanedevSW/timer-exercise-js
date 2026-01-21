const timer = () => {
    function timerSecond(sec) {
        const date = new Date(sec * 1000);
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    const timer = document.querySelector('.timer');

    let seconds = 0;
    let interval;

    function startTimer() {
        interval = setInterval(() => {
            seconds++;
            timer.innerHTML = timerSecond(seconds);
        }, 1000);
    }

    document.addEventListener('click', function (e) {
        const el = e.target;

        if (el.classList.contains('startBtn')) {
            clearInterval(interval);
            startTimer();
            timer.style.color = '#22c55e';
        }

        if (el.classList.contains('pauseBtn')) {
            clearInterval(interval);
            timer.style.color = 'red';
        }

        if (el.classList.contains('resetBtn')) {
            clearInterval(interval);
            seconds = 0;
            timer.innerHTML = '00:00:00';
            timer.style.color = '#22c55e';
        }
    });
};

timer();
