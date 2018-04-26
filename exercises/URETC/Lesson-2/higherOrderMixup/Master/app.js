// 1) Use .forEach() to replace the following for loop.

for (var i = 0; i < cars.length; i++) {
  console.log(`${cars[i]} goes vroom`);
}

   // ANSWER //
cars.forEach(function(car){
    console.log(`${car.name} goes vroom`);
})




// 2) Use .map() to replace the following for loop. //

var angryCars = [];

for (var i = 0; i < cars.length; i++) {
  angryCars.push(cars[i].toUpperCase());
}

   // ANSWER //
var angryCars = cars.map(function(car){
    return car.toUpperCase();
})




// 3) Use .filter() to replace the following for loop. //

var newCars = [];

for (var i = 0; i < cars.length; i++) {
  if (cars[i].year > 2005){
    newCars.push(cars[i]);
  }
}


   // ANSWER //
var newCars = cars.filter(function(car){
    return car.year > 2005;
})





// 4) Use .find() to replace the following for loop.

for (var i = 0; i < cars.length; i++) {
  if (cars[i].model === "E150"){
    var coolVan = cars[i];
    break;
  }
}

var coolVan = cars.find(function(car){
    return car.model === "E150";
})





// 5 Use .some() to replace the following for loop.

for (var i = 0; i < cars.length; i++) {
  if (cars[i].model === "E150"){
    console.log("It is true that there is one or more E150s");
    break;
  }
}

var isThereAtLeastOneE150 = cars.some(function(car){
    if(car.model === "E150"){
        console.log("It is true that there is one or more E150s");
    }
})






// 6) Use .every() to replace the following for loop.

for (var i = 0; i < cars.length; i++) {
  if (cars[i].make != "E150"){
    console.log("It is false that every car is an E150");
    break;
  }
}

var areAllCarsE150 = cars.every(function(car){
    if(car.make !== "E150"){
        console.log("It is false that every car is an E150");
    }
})





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




var carsTotal = cars.reduce(function(previous, car){
    if(car.type === "Ford"){
        previous.numberOfFords++;
        return previous;
    }
    if(car.type === "Chevy"){
        previous.numberOfChevys++;
        return previous;
    }
}, {numberOfFords: 0, numberOfChevys: 0});

//
