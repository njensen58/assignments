// Each day a plant is growing by upSpeed meters. Each night that plant's
// height decreases by downSpeed meters due to the lack of sun heat.
// Initially, plant is 0 meters tall. We plant the seed at the beginning of a day.
// We want to know when the height of the plant will reach a certain level.

function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let total = 0;
    let days = 0;
    while(total <= desiredHeight){
        total += upSpeed;
        if(total >= desiredHeight){
            days++
            break;
        }
        total -= downSpeed;
        days++
    }
    return days;
}


console.log(growingPlant(100, 10, 910)); // 10
console.log(growingPlant(10, 9, 4)); // 1
console.log(growingPlant(5, 2, 7)); // 2
console.log(growingPlant(7, 3, 443)); // 110
