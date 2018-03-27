
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // if the key does not have an audio assigned, don't execute.
    audio.currentTime = 0; // rewind to the start so you can play repetatively.
    audio.play();
    key.classList.add('playing');
}


function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener('keydown', playSound);
