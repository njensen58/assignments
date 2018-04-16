// 1) Filter all numbers out of the array that are less than 5

function fiveAndGreaterOnly(arr) {
    var filteredArray = arr.filter(function(num){
        return num < 5
    })
    return filteredArray;
}

// console.log(fiveAndGreaterOnly([3, 6, 8, 2])); // [3, 2]
























// 2) Filter all numbers out of the array that are odd

function evensOnly(arr) {
    var filteredArray = arr.filter(function(num){
        return num % 2 === 0 && num < 5
    })
    return filteredArray;
}

console.log(evensOnly([3, 6, 8, 2])); /// [2]
















// 3) Filter all strings out of the array that are less than or equal to 5 characters long
function fiveCharactersAndLessOnly(arr) {
    var filteredArray = arr.filter(function(word){
        return  word.length <= 5
    })
    return filteredArray;
}

console.log(fiveCharactersAndLessOnly(["dog", "wolf", "by", "family", "eaten", "camping"])) // ["by", "dog", "wolf", "eaten"]














// 4) Filter out all the people who do not belong to the club
function peopleWhoBelongToTheIlluminati(arr){

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
