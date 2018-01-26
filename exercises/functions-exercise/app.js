// 1

// function addTogether(a, b){
//     return a + b;
// }
// var sum = addTogether(2, 4);
// console.log(sum);


// 2

// var largestOfThree = function(a, b, c){
//     if(a > b && a > c){
//         return a;
//     } else if(b > a && b > c){
//         return b;
//     } else {
//         return c;
//     }
// }
// var largestNum = largestOfThree(3, 8, 22);
// console.log(largestNum);


// 3

// function oddOrEven(a){
//     return a % 2 !== 0 ? 'Odd' : 'Even';
// }
//
// var num = oddOrEven(2);
// console.log(num);

// 4

// var stringTooLong = function(str){
//     return str.length <= 20 ? str + str : str.slice(0, str.length / 2);
// }
// var newStr = stringTooLong("Hello and how are you today?");
// console.log(newStr);


// OPTIONAL CHALLENGES

// 1
// function printFibonacci(n){
//     var fib = [];
//     fib[0] = 0;
//     fib[1] = 1;
//     for(var i = 2; i <= n + 1; i++) {
//         fib[i] = fib[i - 2] + fib[i - 1];
//         console.log(fib[i]);
//     }
// };
//
// printFibonacci(10);


// 2
//
// var quadraticEquation = function(a, b, c){
//     var result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
//     var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
//         return result + " " + result2;
// }
//
// var totals = quadraticEquation(1, 1, -1);
// console.log(totals);

// 3
//Write a function that accepts a string as a parameter. Return the most frequently occuring letter in that string.

var getMax = function(str){
     var max = 0;
     var maxChar = '';
     str.split('').forEach(function(char){
         if(str.split(char).length > max) {
             max = str.split(char).length;
             maxChar = char;
         }
     });
     return maxChar;
};

console.log(getMax('Happy Happy Joy Joy Joy'));
