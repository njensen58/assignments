var ask = require('readline-sync');

var choicesArr = ['Put hand in hole', 'Find the key', 'Open the door'];

    console.log('\n\n\tYou find yourself in a strange room.\n\tThe room is mostly empty, and all you see is a door next to a hole in the wall.\n\n\tYou have these options: ');

var choice = ask.keyInSelect(choicesArr, '\nDecision time, what do you do?: ');

while(choice !== 1){
    if(choice === 0){
        console.log("\n\n\n\n\n\tYou put your hand in the hole? Why would you do that?!?\n\tWhatever was in the hole has now killed you, smart move slick.\n\n\tJust because I like you I will give you another shot.");
        var choice = ask.keyInSelect(choicesArr, '\nDecision time, what do you do?: ');
    }
    if(choice === 2){
        console.log("\n\n\n\n\n\tYou pull on the door and nothing happens. Maybe you need to find a key.");
        var choice = ask.keyInSelect(choicesArr, '\nDecision time, what do you do?: ');
    }
    if(choice === -1){
        console.log("\n\n\n\n\n\tThat's not how this game is played.  You're stuck in a room, so make a choice or die alone.");
        var choice = ask.keyInSelect(choicesArr, '\nDecision time, what do you do?: ');
    }
}

console.log("\n\n\n\n\n\n\n\nYou have got the key! Now just leave.");
choicesArr.splice(0,2);

var choice = ask.keyInSelect(choicesArr, '\nDecision time, what do you do?: ');
while(choice !== 0) {


    if(choice === -1){
        console.log("\n\n\n\n\n\n\n\tYou're so close, why do you want to give up now?  Try again.")
        var choice = ask.keyInSelect(choicesArr, '\n\t*HINT* Choose the first option idiot...: ');
    }
}

console.log("\n\n\n\n\n\n\n\nCongratulations! You successfully exited the room.\n\n\n");
