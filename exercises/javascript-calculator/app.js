var readline = require("readline-sync");

var a = Number(readline.question("Give me a number: "));
var b = Number(readline.question("\nGive me another number: "));
var operation = readline.question("\nEnter the operation to perform (add, sub, mul, div): ");

function add(num1, num2){
    console.log(num1 + num2);
}

function sub(num1, num2){
    console.log(num1 - num2);
}

function div(num1, num2){
    console.log(num1 / num2);
}

function mul(num1, num2){
    console.log(num1 * num2);
}

if(operation === 'add'){
    add(a, b);
} else if(operation === 'sub'){
    sub(a, b);
} else if(operation === 'div'){
    div(a, b);
} else if(operation === 'mul'){
    mul(a, b);
} else {
    console.log("\nYou did not enter a valid operation.");
}
