// PRELIMINARIES

// 1
if(5 > 3){
    console.log('is greater than');
}

// 2
if('cat'.length === 3){
    console.log('is the length');
}

// 3
if('cat' === 'dog'){
    console.log('the same');
} else {
    console.log('not the same');
}


// BRONZE MEDAL

var person = {
    name: 'Nate',
    age: 28
}
// 1
if(person.age >= 18){
    console.log(person.name + ' is allowed to go to the movie');
} else if(person.age < 18) {
    console.log(person.name + ' is not allowed to go to the movie.')
}

// 2
if(person.name.startsWith('B')) {
    console.log(person.name + ' is allowed to go to the movie');
} else {
    console.log(person.name + ' is not allowed to go to the movie.');
}

// 3
if(person.name.startsWith('B') && person.age > 18) {
    console.log(person.name + ' is allowed to go to the movie');
} else {
    console.log(person.name + ' is not allowed to go to the movie.');
}


// SILVER MEDAL

// 1
if('1' === 1) {
    console.log('strict');
} else if('1' == 1) {
    console.log('loose');
} else {
    console.log('not equal at all');
}

// 2
if((1 <= 2 && 2 === 4) || ((3 * 4) > 10 && 5 + 10 > 10)){
    console.log('yes');
}

// GOLD MEDAL

// 1
if(typeof 'dog' === 'string'){
    console.log('Is a string!');
}

// 2 
if(typeof 'true' === 'boolean') {
    console.log('Is a boolean!');
} else {
    console.log('Is not a boolean');
}

// 3
var variable;
if(typeof variable !== 'undefined'){
    console.log('I am Defined!');
} else {
    console.log('I am not defined');
}

// 4


// 5
var num = 3;
num % 2 === 0 ? console.log('number is even') : console.log('number is odd');
