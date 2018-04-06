// Let's define digit degree of some positive integer as the number of
// times we need to replace this number with the sum of its digits until
// we get to a one digit number.
//
// Given an integer, find its digit degree.

// find a way to split the number, add them together, and repeat that process until when it's split, it's length is <= 1;




function digitDegree(n) {
    let count = 0;
    let myNum = n
    while(myNum.toString().length > 1){
        let total = myNum.toString().split('').reduce((final, num) => {
            final += Number(num);
            return final
        }, 0)
        count++
        myNum = total;
    }
    return count;
}


console.log(digitDegree(5));  // 0
console.log(digitDegree(100));  // 1
console.log(digitDegree(91));  // 2
console.log(digitDegree(99));  // 2
console.log(digitDegree(87238904570982730));  // 2
console.log(digitDegree(99999999999999999));  // 2
console.log(digitDegree(9999999999999999999));  // 2
