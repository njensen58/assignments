// 1) Replace all the vars with let and const

// const name = 'John'
// let age = 101
// const pets = ["cat", "dog"]
//
// const petObjects = []
//
// for (let i = 0; i < pets.length; i++){
//   const pet = {type: pets[i]}
//   let name;
//   if (pets[i] === "cat"){
//     name = "fluffy"
//   } else {
//     name = "spot"
//   }
//   pet.name = name
//   petObjects.push(pet)
// }
//
// console.log(petObjects)






// 2) re-write this .map() using a fat arrow function:

// const vegetables = carrots.map(function(carrot){
//     return {type: "carrot", name: carrot}
// })


const vegetables = carrots.map(carrot => ({type: "carrot", name: carrot}));






// 3) re-write this .filter() using a fat arrow function:

const friends = people.filter(person => !!person.friendly)






// 4) re-write the following functions to be fat arrow functions

// function doMathSum(a, b){
//     return a + b
// }

const doMathSum = (a, b) => a + b

// console.log(doMathSum(1,2))

// 4 part 2

// var produceProduct = function(a, b){
//     return a * b
// }

const produceProduct = (a, b) => a * b;

// console.log(produceProduct(4, 5));



// 5) write a function that takes a firstName, a lastName, an age and returns a string like the following:
// Hi Kat Stark, how does it feel to be 40?

// firstName should default to "Jane"
// lastName should default to "Doe"
// age should default to 100

// let firstName = "Jane"
// let lastName = "Doe"
// let age = 100

const makeString = () => console.log(`Hi ${firstName} ${lastName}, how does it feel to be ${age}?`)

console.log(makeString());




// 6) Use the shorthand syntax to make the following code block take up one line.
// const dogs = animals.filter((animal)=>{
//   if (animal.type === "dog"){
//     return true
//   } else {
//     return false
//   }
// })
const animals = ['chicken', 'cat', 'dog'];

const dogs = animals.filter(type => type === "dog")

// console.log(dogs);



// 7) Write a function that will take location and name and output this if location="Hawaii" and name="Janice":

const print = (location, name) => console.log(`
                                               Hi ${name}!

                                               Welcome to ${location}.

                                               I hope you enjoy your stay.  Please ask the president of Hawaii if you n
                                               eed anything.`);

console.log(print("Hawaii", "Janice"));












/////
