// 1) Use .forEach() to replace the following for loop.

for (var i = 0; i < cars.length; i++) {
  console.log(`${cars[i]} goes vroom`);
}

   // ANSWER //
// your code






// 2) Use .map() to replace the following for loop. //

var angryCars = [];

for (var i = 0; i < cars.length; i++) {
  angryCars.push(cars[i].toUpperCase());
}

   // ANSWER //
// your code



// 3) Use .filter() to replace the following for loop. //

var newCars = [];

for (var i = 0; i < cars.length; i++) {
  if (cars[i].year > 2005){
    newCars.push(cars[i]);
  }
}

   // ANSWER //
// your code





// 4) Use .find() to replace the following for loop.

for (var i = 0; i < cars.length; i++) {
  if (cars[i].model === "E150"){
    var coolVan = cars[i];
    break;
  }
}

// Answer
 // your code




// 5 Use .some() to replace the following for loop.

for (var i = 0; i < cars.length; i++) {
  if (cars[i].model === "E150"){
    console.log("It is true that there is one or more E150s");
    break;
  }
}

// Answer
    // your code






// 6) Use .every() to replace the following for loop.

for (var i = 0; i < cars.length; i++) {
  if (cars[i].make != "E150"){
    console.log("It is false that every car is an E150");
    break;
  }
}

// Answer
  // your code





// 7 ) Use .reduce() to replace the following for loop and carTotals definition.

var numberOfFords = 0;
var numberOfChevys = 0;

for (var i = 0; i < cars.length; i++) {
  if (cars[i].model === "ford"){
    numberOfFords ++;
  }
  if (cars[i].model === "chevy"){
    numberOfchevys ++;
  }
}

var carTotals = { numberOfFords: numberOfFords, numberOfchevys: numberOfchevys }


// Answer
    // your code
