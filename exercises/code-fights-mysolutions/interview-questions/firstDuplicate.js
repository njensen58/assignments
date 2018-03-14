// if there are no dups, return -1
// if there is a single duplicate, return that duplicate number
// if there are more than one dup number, return the dup that occurs first


const firstDuplicate = a => {
    const myObj = {}
    for(let i = 0; i < a.length; i++){
        let key = a[i];
        if(myObj[key] || myObj[key] === 0){
            return a[i]
        } else {
            myObj[key] = i
        }
    }
    return -1;
}

// {
//     2: 1,
//     3: 2
// }


console.log(firstDuplicate([2, 9, 3, 5, 1, 5, 2]));   //  3
// console.log(firstDuplicate([2, 4, 3, 5, 1]));   // -1
// console.log(firstDuplicate([1]));  // -1
// console.log(firstDuplicate([3, 3, 3]));  // 3
// console.log(firstDuplicate([8, 4, 6, 2, 6, 4, 7, 9, 5, 8]));  // 6
// console.log(firstDuplicate([2, 2]));  // 2
// console.log(firstDuplicate([2, 1]));  // -1
// console.log(firstDuplicate([2, 1, 3]));  // -1
// console.log(firstDuplicate([2, 3, 3]));  // 3
