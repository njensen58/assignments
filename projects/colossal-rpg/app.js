
var ask = require('readline-sync');

 // GAME RULES - Each time the user beats the encounter, count++.  Game ends once count gets to 10 and player wins, or players health reaches 0.

 // GAME SWITCHES //
var gameOver = false;
var playerOptions = ["w", "print"];
var count = 0;
var currentEnemy;

////////////////////
// GAME FUNCTIONS //
////////////////////

function walk(){
    var enemy = Math.floor(Math.random() * 3);
    // if(enemy === 2){
        encounter();
    // } else {
        //count ++ ?
    //     return;
    // }
};

//     // The enemy is random (can be chosen out of a minimum of 3 different enemy names)


function encounter(){
    var attackOptions = ['Attack', 'Flee'];
    var enemySelect = Math.floor(Math.random() * 3);
    currentEnemy = enemies[enemySelect];
    console.log("\nA " + currentEnemy.type + " has appeared out of the shadows.")
    while(currentEnemy.health > 0){
        var fightChoiceIndex = ask.keyInSelect(attackOptions, "What will you do? ");
        if(attackOptions[fightChoiceIndex] === 'Attack'){
             attack();
        // } else if(attackOptions[fightChoiceIndex] === 'Flee'){
        //     flee();
        // } else if(fightChoiceIndex === -1){
        //     console.log("One cannot simply cancel a battle you nitwit.");
        }
    }
};


function attack(){
    var attackPow = Math.floor(Math.random() * 25);
    if(attackPow < 10){
        attackPow = 10;
    }
    currentEnemy.health -= attackPow;
    console.log("\n\t" + player.name + " hits the " + currentEnemy.type + " for " + attackPow);
    enemyAttack = currentEnemy.attackPow();
    player.health -= enemyAttack;
    console.log("\n\t\tThe " + currentEnemy.type + " hits back for " + enemyAttack);

};

// // If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory
//     // When the player kills enemies, they are awarded with items
// // If the enemy kills the player the console prints an cool death message and the game ends
//
// var flee = function(){};
// // If running, you will choose a random number between 1 and 2 - meaning a 50% chance of escaping
//


//
// //////////////////////
// // PLAYER & ENEMIES //
// //////////////////////
//
var player = {
    health: 100,
    loot: [''] || "Your bag is currently empty"
};

var enemies = [
    {
        type: "Orc",
        health: 20,
        loot: "Axe",
        attackPow: function(){
            attackPowerE = Math.floor(Math.random() * 10);
            return attackPowerE;
        }
    },
    {
        type: "Demon",
        health: 30,
        loot: "Soul Shard",
        attackPow: function(){
            attackPowerE = Math.floor(Math.random() * 15);
            return attackPowerE;
        }
    },
    {
        type: "Dragon",
        health: 40,
        loot: "Dragon Bone",
        attackPow: function(){
            attackPowerE = Math.floor(Math.random() * 25);
            return attackPowerE;
        }
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
            if(currentEnemy.health <= 0){
                console.log("You defeated the " + currentEnemy.type);
                player.loot.push(currentEnemy.loot);
                console.log("You acquired the " + currentEnemy.loot);
                count++;
            }
            if(player.health <= 0){
                console.log("At least you died doing what you loved...");
                gameOver = true;
                break;
            }
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

    if(gameOver === true && player.health > 0){
        console.log("Congrats, you win!");
    }














    /////////////
