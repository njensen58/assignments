// 1) Make an array of numbers that are doubles of the first array.

function doubleNumbers(arr){
    var mappedArray = arr.map(function(num){
        return num * 2
    })
    return mappedArray;
}

// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

















// 2) Take an array of numbers and make them strings
function stringItUp(arr){
    var mappedArray = arr.map(function(num){
        return num.toString()
    })
    return mappedArray
}



// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]



















// 3) Make an array of the names
function namesOnly(arr){
    var mappedArray = arr.map(function(person){
        return `${person.name} ${person.age}`
    })
    return mappedArray;
}

// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]))

 // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]














// 4) Make an array of strings of the names saying whether or not they can go to The Matrix
function thereIsNoSpoon(arr){
    var mappedArray = arr.map(function(person){
        if(person.age >= 18){
            return `${person.name} can go to The Matrix`
        } else  {
            return `${person.name} is under age!!`
        }
    })
    return mappedArray
}

console.log(thereIsNoSpoon([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]))
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]
