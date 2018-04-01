// Find the leftmost digit that occurs in a given string.

const firstDigit = inputString => {
    const alpha = '1234567890';
    for(let i = 0; i < inputString.length; i++){
        for(let j = 0; j < alpha.length; j++){
            if(inputString[i] === alpha[j]){
                return inputString[i]
            }
        }
    }
}


// Or the super simplified way with .match() and regex.


const firstDigit = s => s.match(/\d/)[0]


console.log(firstDigit("var_1__Int")); // "1"
console.log(firstDigit("q2q-q")); // "2"
console.log(firstDigit("0ss")); // "0"
