// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.
//

// the issue is  it is not checking what the last index is subtracted by the index.length-2.

const arrayMaximalAdjacentDifference = inputArray => {
    newGreatest = 0;
    for(let i = 1; i < inputArray.length - 1; i++){
        if(inputArray[i] - inputArray[i - 1] > inputArray[i + 1] - inputArray[i]){
            newGreatest = inputArray[i] - inputArray[i - 1];
            if(inputArray[i] - inputArray[i + 1] > newGreatest){
                newGreatest = inputArray[i] - inputArray[i + 1];
            }
        }
    }
    return inputArray[inputArray.length - 1] - inputArray[inputArray.length - 2] > newGreatest ? inputArray[inputArray.length - 1] - inputArray[inputArray.length - 2] : newGreatest;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));  // 3
console.log(arrayMaximalAdjacentDifference([1, 1, 1, 1]));  // 0
console.log(arrayMaximalAdjacentDifference([-1, 4, 10, 3, -2]));  // 7
console.log(arrayMaximalAdjacentDifference([-7,5,9]));  // 12
console.log(arrayMaximalAdjacentDifference([10,11,13]));  //

// const max = Math.max(...inputArray);
// const posArr = inputArray.filter(num => num > 0);
// const min = Math.min(...posArr);
//     return max - min;
