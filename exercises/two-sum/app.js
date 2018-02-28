// Given an array of integers and a target integer, return the indices of the two numbers which add up to the target.
//
// Assume there is exactly one solution, and that the same element may not be used twice.

//
// const twoSum = (arr, target) => {
//     const dupArr = arr;
//     // loop through array
//     for(let i = 0; i < arr.length - 1; i++){
//         // loop through duplicate array
//         for(let j = 1; j < dupArr.length; j++){
//             // find which two numbers added together equal the target number
//             if(arr[i] + dupArr[j] === target){
//                 // return the index of those two numbers
//                 return [arr.indexOf(arr[i]), dupArr.indexOf(dupArr[j])]
//             }
//         }
//     }
// }

// Quicker Answer

const twoSum = (arr, num) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === num) {
                return [i, j]
            }
        }
    }
}


console.log(twoSum([1,2, 0, 5, 7,3], 4));
console.log(twoSum([1,2,3], 3));
console.log(twoSum([1,2,3], 4)); // [0, 2] because 1 + 3 = 4;
console.log(twoSum([1,2,3, 8, 4], 12));
//returns [0, 2] because 1 + 3 equals 4
