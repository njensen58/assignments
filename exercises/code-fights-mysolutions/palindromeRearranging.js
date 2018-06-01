
const palindromeRearranging = str => {
    let arr = [...str]
    let obj = arr.reduce((final, char) => {
        if(!final[char]){
            final[char] = 1
        }else {
            final[char]++
        }
        return final
    }, {})
    let nonPairCount = 0
    for(let key in obj){
        if(obj[key] % 2 !== 0){
            nonPairCount++
        }
        if(nonPairCount === 2){
            return false
        }
    }
    return true
}


console.log(palindromeRearranging('aabb')); // true
console.log(palindromeRearranging("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc")); // false
console.log(palindromeRearranging("abbcabb")); // true
console.log(palindromeRearranging("zyyzzzzz")); // true
console.log(palindromeRearranging("z")); // true
console.log(palindromeRearranging("zaa")); // true
console.log(palindromeRearranging("abca")); // false
console.log(palindromeRearranging("zabcazb")); // true
