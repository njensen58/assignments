
var ask = require('readline-sync');


////////////////////
// GAME FUNCTIONS //
////////////////////

// GAME RULES - Each time the user beats the encounter, count++.  Game ends once count gets to 10 and player wins, or players health reaches 0.

// GAME SWITCHES //
var gameOver = false;
var playerOptions = ["w", "print"];
var count = 0;

var walk = function(){
    var enemy = Math.floor(Math.random() * 3);
    if(enemy === 2){
        encounter();
    } else {
        return;
    }
};
// the console will ask the user to enter a "W" to walk.
// Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)
    // The enemy is random (can be chosen out of a minimum of 3 different enemy names)

var encounter = function(){
    var attackOptions = ['Attack', 'Flee'];
    var enemySelect = Math.floor(Math.random() * 3);
    var currentEnemy = enemies[enemySelect].type;
    while(//something about the fight){
    var fightChoiceIndex = ask.keyInSelect(attackOptions, "\nA " + currentEnemy + " has appeared out of the shadows.  What will you do?");
        if(attackOptions[fightChoiceIndex] === 'Attack'){
            attack();
        } else if(attackOptions[fightChoiceIndex] === 'Flee'){
            flee();
        } else if(fightChoiceIndex === -1){
            console.log("One cannot simply cancel a battle you nitwit.");
        }
    }
};
// The user can decide to attack or run
// After the player attacks or runs the enemy attacks back for a random damage amount

var attack = function(){};
// If attacking, you will choose a random attack power between a min and max = attackPower function.
// If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory
    // When the player kills enemies, they are awarded with items
// If the enemy kills the player the console prints an cool death message and the game ends

var run = function(){};
// If running, you will choose a random number between 1 and 2 - meaning a 50% chance of escaping

var printStats = function(){};
// If the user enters 'Print' in the console, the console will print the players name, HP, and each item in their inventory

var attackPower = function(){
    var attack = Math.floor(Math.random() * 25);
    if(attack < 10){
        attack = 10;
    }
    return attack;
};
// Random attack value between a min and a max


//////////////////////
// PLAYER & ENEMIES //
//////////////////////

var player = {
    health: 100,
    loot: '' || "Your bag is currently empty"
};

var enemies = [
    {
        type: "Orc",
        health: 20,
        loot: "Axe"
    },
    {
        type: "Demon",
        health: 30,
        loot: "Soul Shard"
    },
    {
        type: "Dragon",
        health: 40,
        loot: "Dragon Bone"
    }
];



            ///////////////
////////////// GAME PLAY ///////////////
            ///////////////


//////////////////
// PLAYER SETUP //
//////////////////

    // Write a fun intro with a few timers to set up the story. ("Narrated through the voice of the 'GUIDE' ")



    player.name = ask.question('\n\n\tMay I have your first name as we begin this adventure?: ');
    console.log("\n\t\tThank you " + player.name + ', let us start at the beginning.');

    ask.keyInYN("\n\n\tLet me tell you your options as you move forward. You will be asked to choose what to do.\n\tTyping the word 'print' will present your Name, current health, and any items you have accumulated on your journey.\n\t\tPressing 'w' will make you walk.\n\n\t\tAre you ready to begin your adventure?");

    ask.setDefaultOptions({
        limit: ['w', 'print']
    });


    while(gameOver === false){
        var choice = ask.question("\n\n\tWhen you are ready to continue, type 'w' to continue walking, or 'print' to check your stats: ");
        if(choice === 'w'){
            walk();
            break;
        }
        if(choice === 'print'){
            console.log("\tPlayer Name: " + player.name + "\n\tPlayer Health: " + player.health + "\n\tPlayer Loot: " + player.loot);
        }

        // if(count === 10){
        //     return;
        // }

        // if(player.health <= 0){
        //     return;
        // }

    }














    /////////////
