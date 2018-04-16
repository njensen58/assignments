// 1) Filter all numbers out of the array that are less than 5

function fiveAndGreaterOnly(arr) {
    var greaterThanFive = arr.filter(function(arrItem){
        return arrItem >= 5;
    })
    return greaterThanFive;
}

// console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]


// 2) Filter all numbers out of the array that are odd

function evensOnly(arr) {
    var evenNums = arr.filter(function(arrItem){
        return arrItem % 2 === 0;
    })
    return evenNums;
}

// console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]


// 3) Filter all strings out of the array that are less than 5 characters long
function fiveCharactersAndLessOnly(arr) {
    var lessThanFiveLength = arr.filter(function(arrItem){
        return arrItem.length <= 5;
    })
    return lessThanFiveLength;
}

// console.log(fiveCharactersAndLessOnly(["dog", "wolf", "by", "family", "eaten", "camping"])) // ["by", "dog", "wolf", "eaten"]


// 4) Filter out all the people who do not belong to the club
function peopleWhoBelongToTheIlluminati(arr){
    var doNotBelong = arr.filter(function(arrItem){
        return arrItem.member === false;
    })
    return doNotBelong;
}

// console.log(peopleWhoBelongToTheIlluminati([
//   {
//     name: "Angelina Jolie",
//     member: true
//   },{
//     name: "Eric Jones",
//     member: false
//   },{
//     name: "Paris Hilton",
//     member: true
//   },{
//     name: "Kayne West",
//     member: false
//   },{
//     name: "Bob Ziroll",
//     member: true
//   }
// ]));


// 5) Filter out all the people who are not old enough to see 'The Matrix' (18)
function ofAge(arr){
    var isNotOldEnough = arr.filter(function(arrItem){
        return arrItem.age < 18;
    })
    return isNotOldEnough;
}

// console.log(ofAge([
//   {
//     name: "Angelina Jolie",
//     age: 80
//   },{
//     name: "Eric Jones",
//     age: 2
//   },{
//     name: "Paris Hilton",
//     age: 5
//   },{
//     name: "Kayne West",
//     age: 16
//   },{
//     name: "Bob Ziroll",
//     age: 100
//   }
// ]));






///
