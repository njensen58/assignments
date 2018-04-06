// You're given three integers, a, b and c. It is guaranteed that two of
// these integers are equal to each other. What is the value of the third integer?

const extraNumber = (a, b, c) => {
    let d = [a, b, c]
    if(d[0] === d[1]){return d[2]}
    return d[1] === d[2] ? d[0] : d[1]
}

// or

// const extraNumber = (a, b, c) => ( a ^ b) ^ c

console.log(extraNumber(2, 7, 2));  // 7
console.log(extraNumber(3, 2, 2));  // 3
console.log(extraNumber(5, 5, 1));  // 1
console.log(extraNumber(500000000, 3, 500000000));  // 3
