
var ask = require('readline-sync');


 // GAME SWITCHES & GLOBAL VARIABLES //

var stage1 = false;
var stage2 = false;
var playerOptions = ["w", "print"];
var count = 0;
var score = 0;
var currentEnemy;
var currentEvent;
var fleeSwitch = false;
var playerHealthPlus;
var playerHealthMinus;

        ////////////////////
        // GAME FUNCTIONS //
        ////////////////////


function walk(){
    var enemyChance = Math.floor(Math.random() * 2);
     if(enemyChance === 1){
        encounter();
    } else if(enemyChance === 0){
        randomEvent();
     }
};

function encounter(){
    enemySelect();
        console.log("\n\n\n\n\n\n\n\n\t\tA " + currentEnemy.type + " has appeared out of the shadows.");
    battleEngine();

};

function randomEvent(){
    enemySelect();
    currentEnemy.health = 1;
    eventSelect();
    if(currentEvent.eventBool === true){
        healthPlus();
        player.health += playerHealthPlus;
            console.log('\n\n\n\n\n\t' + currentEvent.sideStory);
            console.log('\t\t' + player.name + ' gains ' + playerHealthPlus + ' health');
    } else if(currentEvent.eventBool === false){
        healthMinus();
        player.health -= playerHealthMinus;
            console.log('\n\n\n\n\n\t' + currentEvent.sideStory);
            console.log('\t\t' + player.name + ' loses ' + playerHealthMinus + ' health');
    }
}

function enemySelect(){
    var enemySelect = Math.floor(Math.random() * 8);
    switch(enemySelect) {
        case 0:
            currentEnemy = new EasyEnemyGenerator(orc[0], orc[1]);
            break;
        case 1:
            currentEnemy = new EasyEnemyGenerator(demon[0], demon[1]);
            break;
        case 2:
            currentEnemy = new EasyEnemyGenerator(dragon[0], dragon[1]);
            break;
        case 3:
            currentEnemy = new HardEnemyGenerator(orcM[0], orcM[1], orcM[2]);
            break;
        case 4:
            currentEnemy = new HardEnemyGenerator(demonM[0], demonM[1], demonM[2]);
            break;
        case 5:
            currentEnemy = new HardEnemyGenerator(dragonM[0], dragonM[1], dragonM[2]);
            break;
        case 6:
            currentEnemy = new EasyEnemyGenerator(vampireBats[0], vampireBats[1]);
            break;
        case 7:
            currentEnemy = new EasyEnemyGenerator(goblinScout[0], vampireBats[1]);
            break;
    }
    return currentEnemy;
}

function eventSelect(){
    var eventSelect = Math.floor(Math.random() * 6);
    switch(eventSelect){
        case 0:
            currentEvent = new EventGenerator(event1[0], event1[1]);
            break;
        case 1:
            currentEvent = new EventGenerator(event2[0], event2[1]);
            break;
        case 2:
            currentEvent = new EventGenerator(event3[0], event3[1]);
            break;
        case 3:
            currentEvent = new EventGenerator(event4[0], event4[1]);
            break;
        case 4:
            currentEvent = new EventGenerator(event5[0], event5[1]);
            break;
        case 5:
            currentEvent = new EventGenerator(event6[0], event6[1]);
            break;
    }
    return currentEvent;
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
            console.log("\n\n\n\n\n\n\t\t\t\tPlayer 1\n\t\t\t\tName: " + player.name + "\n\t\t\t\tHealth: " + player.health + "\n\t\t\t\tLoot: " + player.loot);
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
        console.log("\n\n\n\n\n\n\n\t\t" + player.name + " hits the " + currentEnemy.type + " for " + attackPow);
        console.log("\t\t\tThe " + currentEnemy.type + " hits back for " + enemyAttack);
};


function flee(){
    var chance = Math.floor(Math.random() * 2);
    if(chance === 0){
        console.log("\n\n\n\n\n\n\n\n\n\n\tYou escaped just in the nick of time.");
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
    healthPlus();
    player.health += playerHealthPlus;
        console.log("\n\t\t\tYou defeated the " + currentEnemy.type);
        if(currentEnemy.loot !== undefined){
            player.loot.push(currentEnemy.loot);
            console.log("\t\t\t\tYou acquired the " + currentEnemy.loot);
        }
        console.log('\t\t\t\t\t' + player.name + " receives + " + playerHealthPlus + " health.");
}

function healthPlus(){
    playerHealthPlus = Math.floor(Math.random() * 16);
        if(playerHealthPlus < 5){
            playerHealthPlus = 5;
        }
        return playerHealthPlus;
};

function healthMinus(){
    playerHealthMinus = Math.floor(Math.random() * 10);
        if(playerHealthMinus < 5){
            playerHealthMinus = 5;
        }
        return playerHealthMinus;
};

function lootCounter(){
    for(var i = 0; i < player.loot.length; i++){
        if(player.loot[i] === 'Lair Key'){
            score += 100;
        }
        if(player.loot[i] === 'Bone Necklace'){
            score += 25;
        }
        if(player.loot[i] === 'Soul Shard'){
            score += 50;
        }
    }
    return score;
}



     //////////////////////
     // PLAYER & ENEMIES //
     //////////////////////


var player = {
    health: 100,
    loot: [] || "Your bag is currently empty"
};

function EasyEnemyGenerator(type, health, attackPow){
    this.type = type;
    this.health = health;
    this.attackPow = function(){
        attackPowerE = Math.floor(Math.random() * 10);
        return attackPowerE;
    }
}


function HardEnemyGenerator(type, health, loot, attackPow){
    this.type = type;
    this.health = health;
    this.loot = loot;
    this.attackPow = function(){
        attackPowerE = Math.floor(Math.random() * 20);
        if(attackPowerE < 10){
            attackPowerE = 10;
        }
        return attackPowerE;
    }
}


    // ENEMY OPTIONS //
var goblinScout = ["Goblin Scout"];
var vampireBats = ["Gang of Vampire Bats", 10];
var orc = ["Orc", 20];
var orcM = ["Orc Cheiftan", 25, "Bone Necklace"];
var demon = ["Demon", 25];
var demonM = ["ArcDemon", 35, "Soul Shard"];
var dragon = ["Dragon", 30];
var dragonM = ["Dragon King", 50, "Lair Key"];


        /////////////////////
        //  RANDOM EVENTS  //
        /////////////////////

function EventGenerator(sideStory, eventBool){
    this.sideStory = sideStory;
    this.eventBool = eventBool;
};


    /// EVENT OPTIONS ///
var event1 = ['\n\n\n\n\n\n\tYou found a potion while walking!', true];
var event2 = ['\n\n\n\n\n\n\tYou stumble on some debris and fall down a very long flight of stairs...', false];
var event3 = ['\n\n\n\n\n\n\tThere is something on the ground you nearly trip over.\n\t\tYou pick it up to discover it\'s a health tonic.', true];
var event4 = ['\n\n\n\n\n\n\tIn the dark you can\'t see it, but you definitely feel it when you walk directly into a wall...', false];
var event5 = ['\n\n\n\n\n\n\tYou found a source of fresh water.', true];
var event6 = ['\n\n\n\n\n\n\tYou walked right into a fire trap!\n\tYou\'re a little crisy, but alive...', false];




            ///////////////
////////////// GAME PLAY ///////////////
            ///////////////


        //////////////////
        // PLAYER SETUP //
        //////////////////

    // Write a fun intro with a few timers to set up the story. ("Narrated through the voice of the 'GUIDE' ")


    player.name = ask.question('\n\n\tHello Traveler, this is the voice of your GUIDE.\n\t\tI apologize we have to meet under such conditions, but I assure you I can be trusted.\n\t\t\tMay I have your first name as we begin this adventure?: ');
    console.log("\n\n\t\tThank you " + player.name + '.');

    ask.keyInYN("\n\n\tGoing forward you will be asked to choose what to do.\n\tTyping the word 'print' will present your Name, current health, and any items you have accumulated on your journey.\n\t\tPressing 'w' will make you walk.\n\n\t\tIf you feel you are up to the task, I will give you some advice... \n\t\t\t(press any key to continue)");

    console.log("\n\n\n\n\n\n\n\tWonderful, you are quite brave.\n\t\tYou are in the deepest tunnels of the Mystic Mountain.\n\t\t\tIn order to escape to a higher level you will need to obtain the 'Lair Key' which unlocks access to the path out of here.'");

    ask.keyInYN("\n\tThe Dragon King rules these depths, and there are many other creatures that live down here.\n\t\tSome creatures you encounter will drop a special item, which will count towards your final score if you make it out of this mountain alive.\n\t\t\tThat should be all you need to know to begin, so when you are ready to start your journey, press any key.");
        //   Introduction to goals of the game.  Dragon King unlocks second level.  Certain enemies drop loot that will go towards your final score.

    ask.setDefaultOptions({
        limit: ['w', 'print']
    });




    ////// STAGE 1 /////// - Goal is to kill dragonKing to get lair key, which unlocks the final stage 2.

    while(stage1 === false){
        var choice = ask.question("\n\n\n\n\tType 'w' to continue walking, or 'print' to check your status: ");
        if(choice === 'w'){
            walk();
            if(currentEnemy.health <= 0 && player.health > 0){
                battleResolution();
            } else if(player.health <= 0){
                stage2 = true;
                stage1 = true;
            }
        }

        if(player.loot.includes("Lair Key")){
            ask.keyInYN("\n\n\n\n\t\tUpon defeat of the Dragon King, a key falls from it's scales.\n\t\t\tYou see behind the dragon's carcas a large doorway.\n\t\t\t\t(press y or n to use the 'Lair Key')");
            console.log("\n\t\tYou use the 'Lair Key' to open the door, a fresh gust of air greets you.\n\t\t\tThis must be the way out of here!");
            stage1 = true;
           }

        if(choice === 'print'){
            console.log("\n\n\n\n\n\n\t\t\t\tPlayer 1\n\t\t\t\tName: " + player.name + "\n\t\t\t\tHealth: " + player.health + "\n\t\t\t\tLoot: " + player.loot);
        }
    }


    /// INTRO TO STAGE 2 ///

    ask.keyInYN('\n\n\n\n\n\t' + player.name + '! I can barely believe you destroyed the Dragon King!\n\t\tWhile you have made it this far, you still have a little ways to go (press any key to continue)');

    ask.keyInYN('\n\n\n\n\n\n\n\n\t\tThere is still a ways to walk to get out of here.\n\t\tI imagine you will need to defeat 5 more enemies to reach the exit.\n\t\t\tGood Luck! (Press anykey to continue)');




    ////// STAGE 2 ///////

    while(stage2 === false){
        console.log("STAGE 2 SON!");
        var choice = ask.question("\n\n\tType 'w' to continue walking, or 'print' to check your status: ");

        if(choice === 'w'){
            walk();
            if(currentEnemy.health <= 0 && player.health > 0){
                battleResolution();
                count++;
            } else if(player.health <= 0){
                stage2 = true;
            }
        }

        if(count >= 5){
            stage2 = true;
        }

        if(choice === 'print'){
            console.log("\n\n\n\n\n\n\t\t\t\tPlayer 1\n\t\t\t\tName: " + player.name + "\n\t\t\t\tHealth: " + player.health + "\n\t\t\t\tLoot: " + player.loot);
        }
    }


///// END GAME SEQUENCE /////

    // final conditional to check if player health is <= 0, or if game has been won.
    // Check players loot and give a final score upon Victory.

    if(player.health <= 0){
        console.log("\n\n\nReally cool death message...\n\tGame over son.");
    } else {
        lootCounter();
        console.log("\n\n\n\n\t\tCongratulations traveler, you successfully escaped the Dragon's Lair.\n\n\n");
        console.log("\t\t\tAfter tallying up all of your 'LOOT', your final score is " + score + '\n\n\n');
    }














    /////////////
