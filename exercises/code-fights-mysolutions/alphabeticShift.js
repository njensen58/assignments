// Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).

const alphabeticShift = inputString => {
    const alpha = "abcdefghijklmnopqrstuvwxyza";
    return inputString
        .split('')
        .map((letter, i) => {
        let alphaIndex = alpha
            .indexOf(letter) + 1;
            return alpha[alphaIndex];
    })
    .join('')
}


console.log(alphabeticShift("crazy")); // "dsbaz"
console.log(alphabeticShift("z")); // "a"
console.log(alphabeticShift("aaaabbbccd")); // "bbbbcccdde"
console.log(alphabeticShift("fuzzy")); // "gvaaz"
console.log(alphabeticShift("codefights")); // "dpefgjhiut"
