/*function retornaHora(date) {
    if (date && !(date instanceof Date)) {
        throw new TypeError('Sem instância de Date');
    }

    if (!date) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })
};

try {
    const timer = setInterval(function () {
        console.log(retornaHora());
    }, 1000);

    setTimeout(function () {
        clearInterval(timer);
    }, 5000)

    setTimeout(function () {
        console.log('Tempo esgotado.');
    }, 6000)
} catch (err) {
    console.log('Essa data não existe.', err);
} finally {

}

function timerSecond(second) {
    const date = new Date(second * 1000);
    return date.toLocaleTimeString('pt-BR', { hour12: false, timeZone: 'UTC' });
};

const timer = document.querySelector('#timer');
const startBtn = document.querySelector('#startBtn');
const pauseBtn = document.querySelector('#pauseBtn');
const resetBtn = document.querySelector('#resetBtn');

let seconds = 0;
let s;

function startTimer() {
    r = setInterval(function () {
        seconds++;
        timer.innerHTML = timerSecond(seconds);
    }, 1000)
};

startBtn.addEventListener('click', function (event) {
    clearInterval(s);
    startTimer()
    timer.style.color = '#22c55e';
});

pauseBtn.addEventListener('click', function (event) {
    clearInterval(r);
    timer.style.color = 'red';
},);

resetBtn.addEventListener('click', function (event) {
    clearInterval(r);
    timer.innerHTML = '00:00:00';
    timer.style.color = '#22c55e';
    seconds = 0;
},);

*/


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
