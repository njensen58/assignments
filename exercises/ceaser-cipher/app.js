var readline = require('readline-sync');

var input = readline.question('What phrase would you like me to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like me to shift? '));

var alphabet = 'abcdefghijklmnopqrstuvwxyz';


function encrypt(input, shift){
    var newStr = '';
    for(var i = 0; i < input.length; i++){
        if(alphabet.indexOf(input[i]) !== -1){
            var alphaIndex = alphabet.indexOf(input[i]);
            newStr += alphabet[(alphaIndex + shift) % 26];
        } else {
            newStr += input[i];
        }
    }
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
