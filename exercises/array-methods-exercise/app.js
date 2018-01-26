var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// console.log("fruit: ", fruit);
// console.log("vegetables: ", vegetables);

// 1
vegetables.pop();
console.log('1 vegetables: ', vegetables);

// 2
fruit.shift();
console.log('2 fruit:', fruit);

// 3
console.log('3 fruit: ', fruit.indexOf('orange'));

// 4
fruit.push(1);
console.log('4 fruit: ', fruit);

// 5
console.log('5 vegetables: ', vegetables.length);

// 6
vegetables.push(3);
console.log('6 vegetables: ', vegetables);

// 7
var food = fruit.concat(vegetables);
console.log('7 food: ', food);

// 8
food.splice(4, 2);
console.log('8 food: ', food);

// 9
food.reverse();
console.log('9 food: ', food);

// 10
console.log('10 food: ', food);

// Final output should be [3, 'pepper', 'watermelon', 'orange', 'apple'];
