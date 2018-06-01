// let randomNum = Math.floor(Math.random() * 1000);
//
// console.log(randomNum)
//
// while(randomNum !== 1){
//     if(randomNum % 3 === 0){
//         randomNum /= 3;
//     } else if((randomNum - 1) % 3 === 0){
//         randomNum -= 1;
//     } else {
//         randomNum += 1;
//     }
//     console.log(randomNum)
// }


const gameOfThrees = (n, counter) => {
    if(n % 3 === 0){
        return gameOfThrees(n / 3, counter += 1);
    } else if(n === 1){
        return `The Final Count is: ${counter}`
    } else {
        return n + 1 % 3 === 0 ? gameOfThrees(n + 1, counter++) : gameOfThrees(n - 1, counter++)
    }
}

console.log(gameOfThrees(500000, 0))
