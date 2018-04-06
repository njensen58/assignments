// Given integers a and b, determine whether the following pseudocode results in an infinite loop
// while a is not equal to b do
//   increase a by 1
//   decrease b by 1
// Assume that the program is executed on a virtual machine which can store arbitrary long numbers and execute forever.


// const isInfiniteProcess = (a, b) => {
//     if(a > b){ return true }
//     if(a <= b){
//         if((b - a) % 2 === 0){ return false }
//             else if((b - a) % 2 === 1){ return true }
//     }
// }

const isInfiniteProcess = (a, b) => {
    if(a === b){ return false }
    if(a > b){ return true }
    a += 1
    b -= 1
    return isInfiniteProcess(a, b);
}


console.log(isInfiniteProcess(2, 6)); // false
console.log(isInfiniteProcess(2, 3)); // true
console.log(isInfiniteProcess(2, 10)); // false
console.log(isInfiniteProcess(0, 1)); // true
console.log(isInfiniteProcess(3, 1)); // true
console.log(isInfiniteProcess(10, 10)); // false
console.log(isInfiniteProcess(10, 0)); // true
