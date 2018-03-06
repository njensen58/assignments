// Given an array of strings, return another array containing all of its longest strings.

const allLongestStrings = inputArray => {
    let count = 0;
    inputArray.forEach(item => item.length > count ? count = item.length : count)
    return inputArray.filter(item => item.length === count ? item : '');
}


console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"])); // ["aba", "vcd", "aba"].
console.log(allLongestStrings(["aa"]));  // ["aa"]
console.log(allLongestStrings(["abc","eeee","abcd","dcd"]));  // ["eeee", "abcd"]
