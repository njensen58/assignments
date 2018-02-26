const adjacentDifference = arr => {
    let largest3 = ['','',''];
    for(let i = arr.length - 1; i >= 2; i--){
        if(arr[i].length + arr[i - 1].length + arr[i - 2].length > largest3[0].length + largest3[1].length + largest3[2].length){
            largest3.splice(0, 3, arr[i - 2], arr[i - 1], arr[i]);
        }
    }
    return largest3;
}





console.log(adjacentDifference(["this", "is", "an", "array"]));
console.log(adjacentDifference(["favorite", "is", "an", "array"]));
console.log(adjacentDifference(["favorite", "is", "an", "array", 'no', 'hypocrite']));
console.log(adjacentDifference(['lovely','duh','ant','nobody']))
