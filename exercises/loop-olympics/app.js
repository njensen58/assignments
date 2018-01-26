// Preliminaries

// 1
// for(var i = 0; i < 10; i++) {
//     console.log(i);
// }

// 2
// for(var i = 9; i >= 0; i--) {
//     console.log(i);
// }

// 3
// var fruit = ["banana", "orange", "apple", "kiwi"];
// for(var i = 0; i < fruit.length; i++) {
//     console.log(fruit[i]);
// }


// BRONZE MEDAL
// 1
// var emptyArr = [];
// for(var i = 0; i < 10; i++) {
//     emptyArr.push(i);
// }
// console.log(emptyArr);

// 2
// for(var i = 0; i <= 100; i+=2){
//     console.log(i);
// }

// 3
// var emptyArr = [];
// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
// for(var i = 0; i < fruit.length; i+=2){
//     emptyArr.push(fruit[i]);
// }
// console.log(emptyArr);


// SILVER MEDAL
// var peopleArray = [
//   {
//     name: "Harrison Ford",
//     occupation: "Actor"
//   },
//   {
//     name: "Justin Bieber",
//     occupation: "Singer"
//   },
//   {
//     name: "Vladimir Putin",
//     occupation: "Politician"
//   },
//   {
//     name: "Oprah",
//     occupation: "Entertainer"
//   }
// ];

// 1
// for(var i = 0; i < peopleArray.length; i++){
//     console.log(peopleArray[i].name);
// }

// 2
// var names = [];
// var occupations = [];
// for(var i = 0; i < peopleArray.length; i++) {
//     names.push(peopleArray[i].name);
//     occupations.push(peopleArray[i].occupation);
// }
// console.log(names);
// console.log(occupations);

// 3
// var names = [];
// var occs = [];
// for(var i = 0; i < peopleArray.length; i+=2) {
//     names.push(peopleArray[i].name);
//     occs.push(peopleArray[i + 1].occupation);
// }
// console.log(names);
// console.log(occs);


// GOLD MEDAL
// 1
// var gridArr = [];
// for(var i = 0; i < 3; i++){
//     gridArr[i] = [];
//     for(var j = 0; j < 3; j++){
//         gridArr[i][j] = [0];
//     }
// }
//
// console.log(gridArr);

// 2
var gridArr = [];
for(var i = 0; i < 3; i++){
    var emptyArr = [];
    for(var j = 0; j < 3; j++) {
        emptyArr.push(j);
    }
    gridArr.push(emptyArr);
}

console.log(gridArr);
