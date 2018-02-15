// 1) Create an array of everyone that has at least one dog and sort it by age.
const sortedDogOwners = (arr) => {
    return arr
        .filter(person => person.pets.includes('dog'))
        .sort((a, b) =>  a.age - b.age)
}

// console.log(sortedDogOwners([
//     {
//         firstName: "Sarah",
//         lastName: "Palin",
//         age: 47,
//         pets: ["dog", "cat"]
//     },
//     {
//         firstName: "Frank",
//         lastName: "Zappa",
//         age: 12,
//         pets: ["dog"]
//     },
//     {
//         firstName: "Rick",
//         lastName: "Sanchez",
//         age: 78,
//         pets: ["cat", "parrot"]
//     },
//     {
//         firstName: "Morty",
//         lastName: "Smith",
//         age: 13,
//         pets: ["cat", "parrot", "dog"]
//     },
//     {
//         firstName: "Kyle",
//         lastName: "Mooney",
//         age: 27,
//         pets: ["dog"]
//     }
// ]));








// 2) Create an array of strings of pets first names in <li>s if their owner is older than 20 and all the owners pets have nicknames, and they have at least one dog.
// const arbitraryPractice = (arr) => {
//     return arr.filter(person => person.age > 20)
//               .filter(person => person.pets.some(pet => pet.type === 'dog'))
//               .filter(person => person.pets.every(pet => pet.nickNames !== ''))
//               .map(person => person.pets)
//               .reduce((arr, pet) => [...arr, ...pet])
//               .reduce((arr, pet) => [...arr, `<li>${pet.name}</li>`], []);
// }

// OR

const arbitraryPractice = (arr) => {
    return arr
        .filter(owner => {
            const olderThan20 = owner.age > 20;
            const hasADog = owner.pets.some(pet => pet.type === 'dog');
            const allHaveNickNames = owner.pets.every(pet => pet.nickNames.length > 0)
            return olderThan20 && hasADog && allHaveNickNames;
        })
        .reduce((pets, owner) => [...pets, ...owner.pets], [])
        .map(pet => `<li>${pet.name}</li>`);
}

console.log(arbitraryPractice([
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47,
        pets: [
            {
                name: "Alfred",
                type: "dog",
                nickNames: ["Lil Alfred", "Alfy", "Alfinator"]
            },
            {
                name: "Charles",
                type: "cat",
                nickNames: ["Charley"]
            },
            {
                name: "Bark Obama",
                type: "dog",
                nickNames: ["Barack", "Mr. President"]
            },
            {
                name: "Christopher George Latore Wallace",
                type: "dog",
                nickNames: ["Notorious D.I.G.", "Diggie Smalls"]
            }

        ]
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12,
        pets: [
            {
                name: "Howard",
                type: "dog",
                nickNames: []
            },
            {
                name: "Bear",
                type: "dog",
                nickNames: []
            }
        ]
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78,
        pets: [
            {
                name: "Bird Person",
                type: "bird",
                nickNames: ["Phoenixperson"]
            },
            {
                name: "Krombopulos Michael",
                type: "Gromflomite",
                nickNames: ["Assassin man"]
            },
            {
                name: "Squanchy",
                type: "Cat-person",
                nickNames: ["Squanch", "Smarf", "Thunder Cat"]
            }

        ]
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 23,
        pets: [
            {
                name: "Morty Jr.",
                type: "Gazorpazorp",
                nickNames: ["Gwendolyn Jr."]
            },
            {
                name: "Snuffels",
                type: "dog",
                nickNames: ["Snowball"]
            }

        ]
    }
]));

//should return

// ['<li>Alfred</li>',
//  '<li>Charles</li>',
//  '<li>Bark Obama</li>',
//  '<li>Christopher George Latore Wallace</li>',
//  '<li>Morty Jr.</li>',
//  '<li>Snuffels</li>']
