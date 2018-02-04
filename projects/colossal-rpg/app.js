
var ask = require('readline-sync');

 // GAME RULES - Each time the user beats the encounter, count++.  Game ends once count gets to 10 and player wins, or players health reaches 0.



 // GAME SWITCHES //
var stage1 = false;
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
        // a random event happens (RandomEventGenrator) that gives a health+ or health- to player.
    //     return;
    // }
};


function encounter(){
    enemySelect();
        console.log("\nA " + currentEnemy.type + " has appeared out of the shadows.");
    battleEngine();

};

function battleEngine(){
    var attackOptions = ['Attack', 'Flee', 'print'];
    while(currentEnemy.health > 0 && fleeSwitch === false){
        var fightChoiceIndex = ask.keyInSelect(attackOptions, "\n\n\tWhat will you do? ");
        if(attackOptions[fightChoiceIndex] === 'Attack'){
             attack();
        } else if(attackOptions[fightChoiceIndex] === 'Flee'){
            flee();
        } else if(fightChoiceIndex === -1){
            console.log("\n\n\tOne cannot simply cancel a battle...");
        } else if(fightChoiceIndex === 2) {
            console.log("\n\n\t\t\t\tPlayer 1\n\t\t\t\tName: " + player.name + "\n\t\t\t\tHealth: " + player.health + "\n\t\t\t\tLoot: " + player.loot);
        }
    }
}

// 3 keys required to win the game,
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

 // If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory
     // When the player kills enemies, they are awarded with items
 // If the enemy kills the player the console prints an cool death message and the game ends

var flee = function(){
    var chance = Math.floor(Math.random() * 2);
    if(chance === 0){
        console.log("\n\n\tYou escaped just in the nick of time.");
        fleeSwitch = true;
        return fleeSwitch;
    }else {
        // Battle sequence continues just like if I did attack, but did not hurt enemy.
        console.log("\n\n\n\t\tYou failed to escape!!")
        enemyAttack = currentEnemy.attackPow();
        player.health -= enemyAttack;
        console.log("\n\t\tThe " + currentEnemy.type + " hits back for " + enemyAttack);
    }
};




 //////////////////////
 // PLAYER & ENEMIES //
 //////////////////////

var player = {
    health: 50,
    loot: [' '] || "Your bag is currently empty"
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
var dragon = ["Dragon", 40, "Dragon Bone"];
// RANDOM LOOT //
var random = ['Rock', ''];




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


// Make a stage 1 and a stage 2.  Stage one completes after 5 enemies have been defeated using count++;

    while(stage1 === false){
        var choice = ask.question("\n\n\tWhen you are ready to continue, type 'w' to continue walking, or 'print' to check your stats: ");
        if(choice === 'w'){
            walk();
            if(currentEnemy.health <= 0){
                console.log("You defeated the " + currentEnemy.type);
                player.loot.push(currentEnemy.loot);
                console.log("You acquired the " + currentEnemy.loot);
                var healthPlus = Math.floor(Math.random() * 11);
                player.health += healthPlus;
                console.log(player.name + " receives + " + healthPlus + " health.");
                count++;
            }

            if(player.health <= 0){
                // game over , player is dead. skip stage1.
                // stage1 === true;
                // stage 2 === true;
                // return stage 2;
            }

            if(player.loot.length > 5){ // Maybe chance this to being finding a key that is generated randomly 1 - 20 times.(Flee or attack.);
                console.log("You have found a door, this must be what that key is for.");
                stage1 = true;
                break;
            }
        }
        if(choice === 'print'){
            console.log("\n\n\t\t\t\tPlayer 1\n\t\t\t\tName: " + player.name + "\n\t\t\t\tHealth: " + player.health + "\n\t\t\t\tLoot: " + player.loot);
        }
    }


    // while(stage2 === false){
    //
    // }




    // final conditional to check if player health is <= 0, or if game has been won.















    /////////////
