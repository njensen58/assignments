// Given array of integers, remove each kth element from it.

const extractEachKth = (inputArray, k) => {
    let finalArr = [];
    let count = 1;
    inputArray.map((num, i) => {
        if(count === k){
            count = 1
        } else if(count !== k){
            finalArr.push(num);
            count++;
        }
    })
    return finalArr;
}


console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); // [1, 2, 4, 5, 7, 8, 10];
console.log(extractEachKth([1, 1, 1, 1, 1], 1)); // [];
console.log(extractEachKth([1, 2, 1, 2, 1, 2, 1, 2], 2)); // [1, 1, 1, 1]
