var ask = require("readline-sync");

var options = ['pick flowers', 'shoot guns', 'fight bears'];
var index = 'undecided';

while(options[index] !== 'fight bears'){
    index = ask.keyInSelect(options, "What would you like to do today?: ");
    if(options[index] === 'pick flowers'){
        console.log("You pick some flowers");
    } else if(options[index] === 'shoot guns'){
        console.log("You shoot guns");
    } else if(index === -1){
        console.log("No cancelling allowed, sorry bitch...");
    }
}

console.log("You fought a bear and died.");




// A VERY NON-DRY METHOD OF DOING THIS

// var options = ['pick flowers', 'shoot guns', 'fight bears'];
// var option = ask.keyInSelect(options, "What would you like to do today?: ");
//
// while(option !== 2){
//   if(option === 0){
//     console.log("You pick some flowers. You make a bouquet.");
//     option = ask.keyInSelect(options, "What would you like to do today?: ");
//   }
//   if(option === 1){
//     console.log("You shoot guns.");
//     option = ask.keyInSelect(options, "What would you like to do today?: ");
//   }
//   if(option === -1){
//     console.log("Nuh Nuh Nuh, you didn't say the magic word.");
//     option = ask.keyInSelect(options, "What would you like to do today?: ");
//   }
// }
//
// console.log("\n\n\n\nYou fought a bear and died! That's why you don't fight bears...");
