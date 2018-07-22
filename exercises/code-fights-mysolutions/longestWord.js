// Define a word as a sequence of consecutive English letters. Find the longest word from the given string.
//
// Example
//
// For text = "Ready, steady, go!", the output should be
// longestWord(text) = "steady".



const longestWord = text => {
    const wordsArr = text.replace(/[^a-z ]/gi, ' ').split(' ')
    let largest = wordsArr[0]
    for(let i = 1; i < wordsArr.length; i++){
        if(wordsArr[i].length > largest.length){
            largest = wordsArr[i]
        }
    }
    return largest
}


console.log(longestWord("You are the best!!!!!!!!!!!! CodeFighter ever!")) // "CodeFighter"
console.log(longestWord("Something asdflj2893fad,")) // "CodeFighter"
console.log(longestWord("To be or not to be")) // "not"
console.log(longestWord( "A!! AA[]z")) // "AA"
console.log(longestWord("Ready[[[, steady, go!")) // "Ready[[[, steady, go!"
console.log(longestWord("Ready, steady, go!")) // "steady"
