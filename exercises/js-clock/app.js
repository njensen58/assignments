const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHnad = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = seconds / 60 * 360 + 90;
    secHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minuteDegress = minutes / 60 * 360 + 90;
    minHand.style.transform = `rotate(${minuteDegress}deg)`;
}

setInterval(setDate);
