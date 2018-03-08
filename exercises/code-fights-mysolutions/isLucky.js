// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.


const isLucky = n => {
    const splitN = n.toString().split('');
    const firstHalfSum = splitN
        .slice(0, splitN.length / 2)
        .reduce((total, item) => total += Number(item), 0);
    const secondHalfSum = splitN
        .slice(splitN.length / 2)
        .reduce((total, item) => total += Number(item), 0);
    return firstHalfSum === secondHalfSum;
}


console.log(isLucky(1230));  // true
console.log(isLucky(239017));  // false
console.log(isLucky(134008));  // true
console.log(isLucky(10));  // false
console.log(isLucky(11));  // true
console.log(isLucky(123321));  // true
