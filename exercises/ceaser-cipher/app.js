var readline = require('readline-sync');

var input = readline.question('What phrase would you like me to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like me to shift? '));

var alphabet = 'abcdefghijklmnopqrstuvwxyz';


function encrypt(input, shift){
    // declare an empty string to build upon
    var newStr = '';
    // loop through the user's input
    for(var i = 0; i < input.length; i++){
        // check to see if the input character exists within the alphabet
        if(alphabet.indexOf(input[i]) !== -1){
            // if so, store that letter's index number in the alphabet.
            var alphaIndex = alphabet.indexOf(input[i]);
            // add the shifted character into the string.
            newStr += alphabet[(alphaIndex + shift) % 26];
        } else {
            // if the character is not in the alphabet, add it to the string. (white space, special characters)
            newStr += input[i];
        }
    }
    // return final string
    return newStr;
}

console.log(encrypt(input, shift));































// function encode(input, shift){
//     var encrypted = '';
//     for(var i = 0; i < input.length; i++){
//         if(alphabet.includes(input[i])){
//             var indexOfAlphabet = alphabet.indexOf(input[i]);
//             encrypted += alphabet[(indexOfAlphabet + shift) % 26];
//         } else {
//             encrypted += input[i];
//         }
//     }
//     return encrypted;
// }
//
// console.log(encode(input, shift));
