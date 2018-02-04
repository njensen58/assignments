
var ask = require('readline-sync');



 // GAME SWITCHES //
var stage1 = false;
var stage2 = false;
var playerOptions = ["w", "print"];
var count = 0;
var currentEnemy;
var fleeSwitch = false;



        ////////////////////
        // GAME FUNCTIONS //
        ////////////////////


function walk(){
    var enemyChance = Math.floor(Math.random() * 3);
    // if(enemyChance === 2){
        encounter();
    // } else {
        // a random event happens (RandomEventGenerator) that gives a health+ or health- to player and an item.
    //     return;
    // }
};

function encounter(){
    enemySelect();
        console.log("\n\n\n\n\n\t\tA " + currentEnemy.type + " has appeared out of the shadows.");
    battleEngine();

};

function enemySelect(){
    var enemySelect = Math.floor(Math.random() * 3);
    if(enemySelect === 0){
        currentEnemy = new EnemyGenerator(orc[0], orc[1], orc[2]);
    } else if(enemySelect === 1){
        currentEnemy = new EnemyGenerator(demon[0], demon[1], demon[2]);
    } else if(enemySelect === 2){
        currentEnemy = new EnemyGenerator(dragon[0], dragon[1], dragon[2]);
    }
    return currentEnemy;
}

function battleEngine(){
        battleSequence();
}

function battleSequence(){
    fleeSwitch = false;
    var attackOptions = ['Attack', 'Flee', 'print'];
    while((currentEnemy.health > 0 && player.health > 0) && fleeSwitch === false){
        var fightChoiceIndex = ask.keyInSelect(attackOptions, "\n\n\tWhat will you do? ");
        if(attackOptions[fightChoiceIndex] === 'Attack'){
             attack();
        } else if(attackOptions[fightChoiceIndex] === 'Flee'){
            flee();
        } else if(fightChoiceIndex === -1){
            console.log("\n\n\n\n\tBoromir says, 'One cannot simply cancel a battle...''");
        } else if(fightChoiceIndex === 2) {
            console.log("\n\n\t\t\t\tPlayer 1\n\t\t\t\tName: " + player.name + "\n\t\t\t\tHealth: " + player.health + "\n\t\t\t\tLoot: " + player.loot);
        }
    }
}

function attack(){
    var attackPow = Math.floor(Math.random() * 25);
    if(attackPow < 10){
        attackPow = 10;
    }
    currentEnemy.health -= attackPow;
    enemyAttack = currentEnemy.attackPow();
    player.health -= enemyAttack;
    console.log("\n\t" + player.name + " hits the " + currentEnemy.type + " for " + attackPow);
    console.log("\n\t\tThe " + currentEnemy.type + " hits back for " + enemyAttack);
};

function flee(){
    var chance = Math.floor(Math.random() * 2);
    if(chance === 0){
        console.log("\n\n\n\n\n\n\tYou escaped just in the nick of time.");
        fleeSwitch = true;
        return fleeSwitch;
    } else if(chance === 1){
        enemyAttack = currentEnemy.attackPow();
        player.health -= enemyAttack;
            console.log("\n\n\n\n\n\t\tYou failed to escape!!");
            console.log("\n\t\tThe " + currentEnemy.type + " hits back for " + enemyAttack);
    }
};

function battleResolution(){
    var healthPlus = Math.floor(Math.random() * 11);
    player.loot.push(currentEnemy.loot);
    player.health += healthPlus;
        console.log("You defeated the " + currentEnemy.type);
        console.log("You acquired the " + currentEnemy.loot);
        console.log(player.name + " receives + " + healthPlus + " health.");
            count++;
}



     //////////////////////
     // PLAYER & ENEMIES //
     //////////////////////

var player = {
    health: 50,
    loot: [] || "Your bag is currently empty"
};

function EnemyGenerator(type, health, loot, attackPow){
    this.type = type;
    this.health = health;
    this.loot = loot;
    this.attackPow = function(){
        attackPowerE = Math.floor(Math.random() * 10);
        return attackPowerE;
    }
}

// Enemy Options //
var orc = ["Orc", 20,"Small Potion"];
var demon = ["Demon", 30, "Soul Shard"];
var dragon = ["Dragon", 40, "Lair Key"];

// RANDOM LOOT //
var random = ['Rock', ''];


        /////////////////////
        //  RANDOM EVENTS  //
        /////////////////////

function EventGenerator(){};




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


// Make a stage 1 and a stage 2.  Stage one completes after 5 enemies have been defeated using count++?? or random key that's needed.

////// STAGE 1 ///////

    while(stage1 === false){
        var choice = ask.question("\n\n\tWhen you are ready to continue, type 'w' to continue walking, or 'print' to check your stats: ");
        if(choice === 'w'){
            walk();
            if(currentEnemy.health <= 0 && player.health > 0){
                battleResolution();
            } else if(player.health <= 0){
                // game over , player is dead. skip stage1.
                stage1 = true;
            }
        }

        if(player.loot.includes("Lair Key")){
            ask.keyInYN("\n\n\n\n\n\n\n\t\tUpon defeat of the mighty dragon, a key falls from it's scales.\n\t\t\tYou see behind the dragon's carcas a large doorway.\n");
            stage1 = true;
           }

        if(choice === 'print'){
            console.log("\n\n\t\t\t\tPlayer 1\n\t\t\t\tName: " + player.name + "\n\t\t\t\tHealth: " + player.health + "\n\t\t\t\tLoot: " + player.loot);
        }
    }



////// STAGE 2 ///////

    while(stage2 === false){
        console.log("You use the key to open the door, a fresh gust of air greets you.\n\tThis must be the way out of here!");

        if(player.health <= 0){
            stage2 = true;
        }
    }


///// END GAME SEQUENCE /////

    // final conditional to check if player health is <= 0, or if game has been won.

    if(player.health <= 0){
        console.log("Really cool death message...\n\tGame over son.");
    } else {
        console.log("catch me");
    }













    /////////////
