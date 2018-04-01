// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

const arrayReplace = (inputArray, elemToReplace, substitutionElem) => inputArray
    .map(item => item === elemToReplace ? substitutionElem : item);



console.log(arrayReplace([1, 2, 1], 1, 3)); // => [3, 2, 3];
console.log(arrayReplace([1, 2, 3, 4, 5], 3, 0)); // => [1, 2, 0, 4, 5]
console.log(arrayReplace([1, 1, 1], 1, 10)); // =>
