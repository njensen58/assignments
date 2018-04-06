// Given a string, output its longest prefix which contains only digits.

function longestDigitsPrefix(inputString) {
    let arr = Array(...inputString);
    let finalStr = ''
    for(let i = 0; i < arr.length; i++){
        if(Number(arr[i]) || arr[i] === '0'){
            finalStr += arr[i]
        } else if(!Number(arr[i]) && finalStr.length < 1){
            return '';
        } else {
            return finalStr
        }
    }
    return finalStr
}

console.log(longestDigitsPrefix("123aa1"));  // 123
console.log(longestDigitsPrefix("0123456789"));  // "0123456789"
console.log(longestDigitsPrefix("  3) always check for whitespaces"));  // Empty
console.log(longestDigitsPrefix("the output is 42"));  // Empty
console.log(longestDigitsPrefix("12abc34")); // 12
