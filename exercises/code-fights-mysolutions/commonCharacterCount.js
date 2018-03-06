// Given two strings, find the number of common characters between them.

const commonCharacterCount = (s1, s2) => {
    let count = 0;
    let splitS2 = s2.split('')
    for(let i = 0; i < s1.length; i++){
        if(splitS2.includes(s1[i])){
            splitS2.splice(splitS2.indexOf(s1[i]), 1);
            count += 1;
        }
    }
    return count;
}

console.log(commonCharacterCount('aabcc', 'adcaa')); // 3
console.log(commonCharacterCount('zzzz', 'zzzzzz')); // 4
console.log(commonCharacterCount("abca", "xyzbac")); // 3
console.log(commonCharacterCount('a','b')); // 0
