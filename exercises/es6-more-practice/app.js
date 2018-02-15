// 1) Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:
// const collectAnimals = (...animals) => console.log(animals);


// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// ["dog", "cat", "mouse", "jackolope", "platypus"]



// 2) Make a food object with the array names as properties using Object Literals:
// const fruit = ["apple", "pear"];
// const sweets = ["cake", "pie"];
// const vegetables = ["carrot"];
//
// const food = {
//     fruit,
//     sweets,
//     vegetables
// }

// console.log(food);




///////////// DDDOOOOOO LLLAAATTTTEEERRRR ///////////////


// 3) Use destructuring to fill in the blanks and use the property names as variables:

// const vacation = {
//   location: "Burly Idaho",
//   duration: "2 weeks"
// };
//
// const{location, duration} = vacation;


// console.log(`We're going to have a good time in ${location} for ${duration}`)





// 4) Use destructuring to make this code ES6:

// const items = ["a", "b", "c"];

// const firstItem = items[0];

// const[firstItem,secondItem,thirdItem] = items;

// console.log(firstItem + secondItem + thirdItem);




// 5)

// const favoriteActivitiesInOrder = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];
//
// const[firstFav, secondFav, thirdFav] = favoriteActivitiesInOrder;

// console.log("My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav);





// 6) Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in.

// const combineAnimals = (...arrs) => {
//     return arrs;
// }
//
// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(...realAnimals, ...magicalAnimals, ...mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]






// 7) Try to make the following function more ES6xy:

// const product = (...numbers) => {
//
//
//   return numbers.reduce((acc, number) => {
//     return acc * number;
//   }, 1)
// }
//
// console.log(product(1, 2, 3))





// 8) Make the following function more ES6xy. Use at least both the rest and spread operators:

function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}










////
