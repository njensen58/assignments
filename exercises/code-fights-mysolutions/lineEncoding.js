// Given a string, return its encoding defined as follows:

// 1
// First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
// for example, "aabbbc" is divided into ["aa", "bbb", "c"]

// 2
// Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
// for example, substring "bbb" is replaced by "3b"

// 3
// Finally, all the new strings are concatenated together in the same order and a new string is returned.
// Example

// Example:
// For s = "aabbbc", the output should be
// lineEncoding(s) = "2a3bc".


const lineEncoding = s => {
    let tracker = s[0]
    let str = s[0]
    const arr = []
    for(let i = 1; i < s.length; i++){
        if(s[i] === tracker){
            str += s[i]
        } else if(s[i] !== tracker){
            arr.push(str)
            str = ''
            tracker = s[i]
            str += tracker
        }
        if(i === s.length - 1){
            arr.push(str)
        }
    }
    let countArr = []
    for(let i = 0; i < arr.length; i++){
        let l = arr[i].length
        if(l === 1){
            countArr.push(arr[i])
        } else {
            let letter = arr[i].slice(0, 1)
            countArr.push(l.toString() + letter)
        }
    }
    return countArr.join('')
}

console.log(lineEncoding("aabbbc")) // "2a3bc"
console.log(lineEncoding("abbcabb")) // "a2bca2b"
console.log(lineEncoding("abcd")) // "abcd"
console.log(lineEncoding("zzzz")) // "4z"
console.log(lineEncoding("wwwwwwwawwwwwww")) // "7wa7w"
