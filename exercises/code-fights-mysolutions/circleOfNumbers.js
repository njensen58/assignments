
// radially opposite will be n / 2 spaces away from its opposite
    // so we need to find how many spaces away on the circle it is, then
        // if the firstNumber > n / 2, then you subtract the spacesamount from first firstNumber
            // Else, you add the spaces toirstNumber


const circleOfNumbers = (n, firstNumber) => {
    const spaces = n / 2;
    if(firstNumber * 2 === n) {
        return 0;
    }
    return firstNumber > spaces ? firstNumber - spaces : firstNumber + spaces;
}

console.log(circleOfNumbers(10, 2));   // 7
console.log(circleOfNumbers(10, 7));   // 2
console.log(circleOfNumbers(4, 1));   // 3
console.log(circleOfNumbers(6, 3));   // 0
