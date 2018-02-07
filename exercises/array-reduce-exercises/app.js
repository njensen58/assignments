// 1) Turn an array of numbers into a total of all the numbers
// function total(arr) {
//     var total = arr.reduce(function(total, arrItem){
//         return total + arrItem;
//     }, 0);
//     return total;
// }

// console.log(total([1,2,3])); // 6






// 2) Turn an array of numbers into a long string of all those numbers.
// function stringConcat(arr) {
//     var str = arr.reduce(function(final, arrItem){
//         return final + arrItem.toString();
//     },'')
//     return str;
// }

// console.log(stringConcat([1,2,3])) // "123"






// 3) Turn an array of voter objects into a count of how many people voted
// function totalVotes(arr) {
//     var votes = arr.reduce(function(count, arrItem){
//         if(arrItem.voted){
//             count ++;
//         }
//         return count;
//     }, 0);
//     return votes;
// }

// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];
// console.log(totalVotes(voters)) // 7




// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
// function shoppingSpree(arr) {
//     var sum = arr.reduce(function(total, arrItem){
//         return total + arrItem.price;
//     }, 0);
//     return sum;
// }
//
// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];

// console.log(shoppingSpree(wishlist)) // 227005




// 5) Given an array of arrays, flatten them into a single array
// function flatten(arr) {
//     var flatArr = arr.reduce(function(flat, arrItem){
//         return flat.concat(arrItem);
//     },[]);
//     return flatArr;
// }
//
// var arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ];

// console.log(flatten(arrays)) // ["1", "2", "3", true, 4, 5, 6];





// 6) Given an array of potential voters, return an object representing the results of the vote
// Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    var voterObj = arr.reduce(function(myObj, currentItem){
        if(currentItem.age > 17 && currentItem.age < 26){
            myObj.youth++;
            if(currentItem.voted){
                myObj.youngVotes++;
            }
        }
        if(currentItem.age > 25 && currentItem.age < 36){
            myObj.mids++;
            if(currentItem.voted){
                myObj.midVotes++;
            }
        }
        if(currentItem.age > 35 && currentItem.age < 56){
            myObj.olds++;
            if(currentItem.voted){
                myObj.oldVotes++;
            }
        }
        return myObj;

    }, {youngVotes: 0, youth: 0, midVotes: 0, mids: 0, oldVotes: 0, olds: 0});

    return voterObj;
}

// console.log(voterResults(voters)) // Returned value shown below:
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4
}
*/
