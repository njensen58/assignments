// For inputString = "2 apples, 12 oranges", the output should be
// sumUpNumbers(inputString) = 14.


const sumUpNumbers = inputString => {
    const numsArr = inputString.replace(/[^0-9]/g, " ").split(' ')
    const final = numsArr.reduce((final, num) => {
        if(typeof Number(num) === 'number'){
            final += Number(num)
        }
        return final
    }, 0)
    return final
}


console.log(sumUpNumbers("2 apples, 12 oranges")) // 14
console.log(sumUpNumbers("123450")) // 123450
console.log(sumUpNumbers("Your payment method is invalid")) // 0
console.log(sumUpNumbers("no digits at all")) // 0
console.log(sumUpNumbers("there are some (12) digits 5566 in this 770 string 239")) // 6587
