
// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.
//
// Given two arrays a and b, check whether they are similar.

// b will always be the same length as a.
    // can moving 1 thing in 'a' make 'a' equal to 'b'.  if they differ, will they be the same if the different indexs are only 2, and those two removed make 'a' and 'b' equal.

const areSimilar = (a, b) => {
    const diffA = a.filter((a, i) => a !== b[i] ? a : '')
    const diffB = b.filter((b, i) => b !== a[i] ? b : '')
    const aSort = diffA.sort((a,b) => a-b)
    const bSort = diffB.sort((a,b) => a-b)
    if(aSort.length === 0){
        return true;
    } else if(aSort.length === 2){
        return aSort.join('') === bSort.join('');
    }
    return false;
}


console.log(areSimilar([1, 2, 3], [1, 2, 3])); // true
console.log(areSimilar([1, 2, 3], [2, 1, 3])); // true
console.log(areSimilar([1, 2, 2], [2, 1, 1])); // false
console.log(areSimilar([1, 1, 4], [1, 2, 3])); // false
console.log(areSimilar([832, 998, 148, 570, 533, 561, 894, 147, 455, 279], [832, 570, 148, 998, 533, 561, 455, 147, 894, 279])); // false
