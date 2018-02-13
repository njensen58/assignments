const btn = document.getElementById('button');
const screen = document.getElementById('click');
const timer = document.getElementById('countdown');
let count = localStorage.count || 0;
let timerCount = 10;
screen.textContent = count;

btn.addEventListener("click", counter);

setTimeout(function(){
    btn.removeEventListener("click", counter);
}, 10000);

function counter() {
    count++;
    screen.textContent = count;
    localStorage.count = count;
}

const timing = setInterval(function(){
    timerCount--;
    timer.textContent = timerCount;
    if(timerCount <= 0)
        clearInterval(timing);
}, 1000);