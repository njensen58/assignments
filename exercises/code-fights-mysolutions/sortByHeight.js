// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.

const sortByHeight = a => {
    const numsToSort = []
    const finalArr = [];
    for(let i = 0; i < a.length; i++){
        if(a[i] !== -1){
            numsToSort.push(a[i])
        }
    }
    const sorted = numsToSort.sort((a,b) => a - b);
    for(let j = 0; j < a.length; j++){
        a[j] === -1 ? finalArr.push(-1) : finalArr.push(parseInt(sorted.splice(0, 1))
    }
    return finalArr;
}



console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));  // [-1, 150, 160, 170, -1, -1, 180, 190]
console.log(sortByHeight([-1, -1, -1, -1, -1]));  // [-1, -1, -1, -1, -1]
console.log(sortByHeight([4, 2, 9, 11, 2, 16]));  // [2, 2, 4, 9, 11, 16]
