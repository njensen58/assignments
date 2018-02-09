// 1) Return a list of everyone older than 18 sorted alphabetically by last name.

const sortedOfAge = arr => arr
    .filter(age => age.age > 18)
    .sort((a, b) => a.lastName > b.lastName)

console.log(sortedOfAge([
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47
  },{
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
  },{
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78
  },{
    firstName: "Morty",
    lastName: "Smith",
    age: 13
  },{
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27
  }
]));




// 2) Using the same array from the problem above, return a sorted list, youngest to oldest, of People in <li>s

const peopleArray = [
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47
  },{
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
  },{
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78
  },{
    firstName: "Morty",
    lastName: "Smith",
    age: 13
  },{
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27
  }
];

const toDisplayInHTML = arr => arr
    .sort((a, b) => a.age - b.age)
    .map(name => `<li> ${name.firstName} is ${name.age} </li>`)


console.log(toDisplayInHTML(peopleArray));
