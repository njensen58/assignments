
// Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.
//
// Example
//
// For n = 152, the output should be
// deleteDigit(n) = 52;
// For n = 1001, the output should be
// deleteDigit(n) = 101.


const deleteDigit = n => {
    let str = n.toString();
    let largest = Number(str.slice(1))
    if(str.length === 2){
        return str[0] > str[1] ? Number(str[0]) : Number(str[1])
    }
    for(let i = 1; i < str.length - 1; i++){
        let current = Number(str.slice(0, str.indexOf(str[i])) + str.slice(str.indexOf(str[i]) + 1))
        if(current > largest){
            largest = current
        }
    }
    return largest
}

console.log(deleteDigit(152)) // 52
console.log(deleteDigit(1001)) // 101
console.log(deleteDigit(10)) // 1
console.log(deleteDigit(222219)) // 22,229
