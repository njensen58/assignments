let randomNum = Math.floor(Math.random() * 1000);

console.log(randomNum)

while(randomNum !== 1){
    if(randomNum % 3 === 0){
        randomNum /= 3;
    } else if((randomNum - 1) % 3 === 0){
        randomNum -= 1;
    } else {
        randomNum += 1;
    }
    console.log(randomNum)
}
