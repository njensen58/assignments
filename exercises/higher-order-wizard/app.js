var wizards = ["Edwin Odesseiron", "Harry Potter", "Ronny the Bear", "Gandalf the Grey"]

var wizards = [
  {
    name: "Edwin Odesseiron",
    age: 37,
    alignment: "lawful evil"
  },
  {
    name: "Harry Potter",
    age: 21,
    alignment: "neutral good"
  },
  {
    name: "Hermony Granger",
    age: 21,
    alignment: "lawful good"
  },
  {
    name: "Ronny the Bear",
    age: 21,
    alignment: "neutral good"
  },
  {
    name: "Gandalf",
    age: 100,
    alignment: "neutral good"
  }
]


// 1 Log to the console every wizards name.
wizards.forEach(function(wizard){
   console.log(wizard.name);
})

// 2 Add a .isAlive = true property to every wizard.
wizards.forEach(function(wizard){
    wizard.isAlive = true;
})

// 3 Make an array of all the Wizards the are "neutral good".
var neutralGood = wizards.filter(function(wizard){
    return wizard.alignment === "neutral good";
})

// 4 Find the index of a wizard that is "lawful good".
var lawfulIndex = wizards.findIndex(function(wizard){
    return wizard.alignment === 'lawful good';
})

// 5 Return a Boolean that states whether or not all the wizards are alive.
var allAlive = wizards.every(function(wizard){
    return wizard.isAlive === true;
})

// 6 Return a Boolean that states whether or not at least one wizard is "neutral good".
var isOneGood = wizards.some(function(wizard){
    return wizard.alignment === 'neutral good';
})

// 7 Check every "alignment" for every wizard. Kill every "neutral good" wizard.
var killTheNeutral = wizards.forEach(function(wizard){
    if(wizard.alignment === 'neutral good'){
        wizard.isAlive = false;
    }
})

// 8 Return a Boolean that states whether or not all the wizards are alive.
var areAllAlive = wizards.every(function(wizard){
    return wizard.isAlive === true;
})







///
