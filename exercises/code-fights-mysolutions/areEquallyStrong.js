// Call two arms equally strong if the heaviest weights they each are able to lift are equal.
// Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.
// Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

// Heaviest weights each are able to lift are equal, so the largest of the two must be the same num, same with weakest.
    // but it does not have to be the same arm, just equal weights;



const areEquallyStrong = (yourLeft, yourRight, friendsLeft, friendsRight) => {
    const p1Arr = [yourLeft, yourRight].sort((a, b) => a - b)
    const p2Arr = [friendsLeft, friendsRight].sort((a, b) => a - b)
        return p1Arr.every((num, i) => num === p2Arr[i])
}


console.log(areEquallyStrong(10, 15, 15, 10));  // true
console.log(areEquallyStrong(15, 10, 15, 10));  // true
console.log(areEquallyStrong(15, 10, 15, 9));  // false
console.log(areEquallyStrong(10, 5, 5, 10));  // true
console.log(areEquallyStrong(10, 15, 5, 20));  // false
