
var ask = require('readline-sync');
var sleep = require('sleep');


 // GAME SWITCHES & GLOBAL VARIABLES //

var stage1 = false;
var stage2 = false;
var playerOptions = ["w", "print"];
var count = 0;
var score = 0;
var currentEnemy;
var currentEvent;
var fleeSwitch = false;
var potionCounter;
var potionTaken = false;
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
        walkingMov();
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
                sleep.sleep(1);
            console.log('\n\n\n\n\n\n\n\n\n\t' + currentEvent.sideStory);
                sleep.sleep(1);
            console.log('\t\t\t' + player.name + ' gains ' + playerHealthPlus + ' health');
                sleep.sleep(1);
    } else if(currentEvent.eventBool === false){
        healthMinus();
        player.health -= playerHealthMinus;
                sleep.sleep(1);
            console.log('\n\n\n\n\n\t' + currentEvent.sideStory);
                sleep.sleep(1);
            console.log('\t\t\t' + player.name + ' loses ' + playerHealthMinus + ' health');
                sleep.sleep(1);
    }
}

function enemySelect(){
    var enemySelect = Math.floor(Math.random() * 8);
    switch(enemySelect) {
        case 0:
            currentEnemy = new EasyEnemyGenerator(orc[0], orc[1], otherLoot[1]);
            break;
        case 1:
            currentEnemy = new EasyEnemyGenerator(demon[0], demon[1], otherLoot[1]);
            break;
        case 2:
            currentEnemy = new EasyEnemyGenerator(dragon[0], dragon[1], otherLoot[1]);
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
            currentEnemy = new EasyEnemyGenerator(vampireBats[0], vampireBats[1], otherLoot[0]);
            break;
        case 7:
            currentEnemy = new EasyEnemyGenerator(goblinScout[0], vampireBats[1], otherLoot[0]);
            break;
    }
    return currentEnemy;
}

function eventSelect(){
    var eventSelect = Math.floor(Math.random() * 14);
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
        case 6:
            currentEvent = new EventGenerator(event7[0], event7[1]);
            break;
        case 7:
            currentEvent = new EventGenerator(event8[0], event8[1]);
            break;
        case 8:
            currentEvent = new EventGenerator(event9[0], event9[1]);
            break;
        case 9:
            currentEvent = new EventGenerator(event10[0], event10[1]);
            break;
        case 10:
            currentEvent = new EventGenerator(event11[0], event11[1]);
            break;
        case 11:
            currentEvent = new EventGenerator(event12[0], event12[1]);
            break;
        case 12:
            currentEvent = new EventGenerator(event13[0], event13[1]);
            break;
        case 13:
            currentEvent = new EventGenerator(event14[0], event14[1]);
            break;
    }
    return currentEvent;
}


function battleEngine(){
        battleSequence();
}


function battleSequence(){
    fleeSwitch = false;
    var attackOptions = ['Attack', 'Flee', 'Print', 'Potion'];
    while((currentEnemy.health > 0 && player.health > 0) && fleeSwitch === false){
        var fightChoiceIndex = ask.keyInSelect(attackOptions, "\n\n\tWhat will you do? ");
        if(attackOptions[fightChoiceIndex] === 'Attack'){
             attack();
        } else if(attackOptions[fightChoiceIndex] === 'Flee'){
            flee();
        } else if(fightChoiceIndex === -1){
            console.log("\n\n\n\n\tBoromir says, 'One cannot simply cancel a battle...''");
                sleep.sleep(1);
        } else if(fightChoiceIndex === 2) {
            console.log("\n\n\n\n\n\n\t\t\t\tPlayer 1\n\t\t\t\tName: " + player.name + "\n\t\t\t\tHealth: " + player.health + "\n\t\t\t\tLoot: " + player.loot);
        } else if(fightChoiceIndex === 3){
            usePotion();
        }
    }
}


function attack(){
    var attackPow = Math.floor(Math.random() * 26);
    if(attackPow < 10){
        attackPow = 10;
    }
    currentEnemy.health -= attackPow;
    enemyAttack = currentEnemy.=attackPow();
    player.health -= enemyAttack;
        console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\t\t" + player.name + " hits the " + currentEnemy.type + " for " + attackPow);
        sleep.sleep(1);
        console.log("\t\t\tThe " + currentEnemy.type + " hits back for " + enemyAttack + '\n');
        sleep.sleep(1);
};


function flee(){
    var chance = Math.floor(Math.random() * 2);
    if(chance === 0){
        sleep.sleep(1);
        console.log("\n\n\n\n\n\n\n\n\n\n\tYou escaped just in the nick of time.");
        fleeSwitch = true;
        return fleeSwitch;
    } else if(chance === 1){
        sleep.sleep(1);
        enemyAttack = currentEnemy.attackPow();
        player.health -= enemyAttack;
            console.log("\n\n\n\n\n\t\tYou failed to escape!!");
                sleep.sleep(1);
            console.log("\n\t\tThe " + currentEnemy.type + " hits back for " + enemyAttack);
                sleep.sleep(1);
    }
};


function battleResolution(){
    healthPlus();
    player.health += playerHealthPlus;
        console.log("\n\t\t\tYou defeated the " + currentEnemy.type);
            sleep.sleep(1);
        if(currentEnemy.loot !== undefined){
            player.loot.push(' ' + currentEnemy.loot);
            console.log("\t\t\t\tYou acquired the " + currentEnemy.loot);
                sleep.sleep(1);
        }
        console.log('\t\t\t\t\t' + player.name + " receives + " + playerHealthPlus + " health.");
            sleep.sleep(1);
}

function usePotion(){
    potionCounter = 0;
    for(var i = 0; i <= player.loot.length; i++){
        if(player.loot[i] === ' Potion'){
            potionCounter++;
        }
    }
    hasPotion();
}

function hasPotion(){
    if(potionCounter <= 0){
        console.log("\n\n\n\n\t\tYou do not have any potions to use.")
    } else {
        takePotion();
    }
}

function takePotion(){
    var itemOptions = ['yes', 'no'];
    potionTaken = false;
    while(potionTaken === false){
    var answer = ask.keyInSelect(itemOptions, "\n\n\n\t\tYou currently have " + potionCounter + " potion(s).\n\n\t\t\tWould you like to use one? (y or n)");
        if(itemOptions[answer] === 'yes'){
            potionEffect();
            potionTaken = true;
        } else if(itemOptions[answer] === 'no'){
            console.log("\n\n\n\n\n\t\tAlright, it's good to know you have it available if needed.");
            potionTaken = true;
        } else {
            console.log("\n\n\t\tPlease answer yes or no.");
                sleep.sleep(1);
        }
    }
}

function potionEffect(){
    var potionIndex = player.loot.indexOf(' Potion');
    player.loot.splice(potionIndex, 1);
    player.health += 10;
        iTookAPotion();
        console.log('\n\n\n\t\t' + player.name + ' took a potion and receieved +10 health.');
            sleep.sleep(2);
};

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
        if(player.loot[i] === ' Lair Key'){
            score += 100;
        }
        if(player.loot[i] === ' Bone Necklace'){
            score += 25;
        }
        if(player.loot[i] === ' Soul Shard'){
            score += 50;
        }
        if(player.loot[i] === ' Coin'){
            score += 10;
        }
        if(player.loot[i] === ' Potion'){
            score += 15;
        }
        score += player.health;
    }
    return score;
}


     //////////////////////
     // PLAYER & ENEMIES //
     //////////////////////


var player = {
    health: 100,
    loot: [' Potion']
};

function EasyEnemyGenerator(type, health, loot, attackPow){
    this.type = type;
    this.health = health;
    this.loot = loot;
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
        attackPowerE = Math.floor(Math.random() * 18);
        if(attackPowerE < 10){
            attackPowerE = 10;
        }
        return attackPowerE;
    }
}


    // ENEMY OPTIONS //
var goblinScout = ["Goblin Scout"];
var vampireBats = ["Gang of Vampire Bats", 15];
var orc = ["Orc", 20];
var orcM = ["Orc Cheiftan", 35, "Bone Necklace"];
var demon = ["Demon", 25];
var demonM = ["ArcDemon", 40, "Soul Shard"];
var dragon = ["Dragon", 30];
var dragonM = ["Dragon King", 65, "Lair Key"];

    // ITEMS //
var otherLoot = ['Coin', 'Potion'];


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
var event6 = ['\n\n\n\n\n\n\tYou walked right into a fire trap!\n\tYou\'re a little crispy, but alive...', false];
var event7 = ['\n\n\n\n\n\n\tYou discover a granola bar in your pocket.', true];
var event8 = ['\n\n\n\n\n\n\tYou have a panic attack, fall over, and hit you head on a rock...', false];
var event9 = ['\n\n\n\n\n\n\tYou found Jesus', true];
var event10 = ['\n\n\n\n\n\n\tYou drink what you thought was water.\n\tTurns out it\'s Orc urine...', false];
var event11 = ['\n\n\n\n\n\n\tYou take a nap.  A really really good nap.', true];
var event12 = ['\n\n\n\n\n\n\tA a rock in your shoe causes a blister..', false];
var event13 = ['\n\n\n\n\n\n\tYou remembered what your momma told you.', true];
var event14 = ['\n\n\n\n\n\n\tYou got rick-rolled\n\t\tNever gonna give you up, never gonna let you dooowwwwn.', false];






            ///////////////
////////////// GAME PLAY ///////////////
            ///////////////


        //////////////////
        // PLAYER SETUP //
        //////////////////


    console.log('\n\n\tHello Traveler, this is the voice of your GUIDE.');
        sleep.sleep(2);
    console.log('\n\t\t[GUIDE] I apologize we have to meet under such conditions, \n\t\tbut I assure you I can be trusted.');
        sleep.sleep(2);
    player.name = ask.question('\n\n\t\t[GUIDE] May I have your first name as we begin this adventure?: ');
        sleep.sleep(1);
    console.log("\n\n\t\t[GUIDE] Thank you " + player.name + '.');
        sleep.sleep(1);
    ask.keyIn("\n\n\t[GUIDE] Going forward you will be asked to choose what to do.\n\t\t(press any key to continue)");
    console.log("\n\t[GUIDE] Typing the word 'print' will present your Name, current health, and any items you have accumulated on your journey.");
        sleep.sleep(3);
    ask.keyIn("\n\t[GUIDE] Pressing 'w' will make you walk.\n\t\t[GUIDE] If you feel you are up to the task, I will give you some advice... \n\t\t\t(press any key to continue)");

        mysticMountainImg()
    ask.keyIn("\n\t[GUIDE] Wonderful, you are quite brave.  Welcome to the Mystic Mountain. \n\t\t\t(press any key to continue) ");
        sleep.sleep(3);
    ask.keyIn("\n\n\t\t[GUIDE] In order to escape to a higher level of this mountain you will need to obtain the 'Lair Key', \n\t\t\twhich unlocks access to the path out of here.\n\t\t\t\t(press any key to continue)'");

    ask.keyIn("\n\t[GUIDE] The Dragon King rules these depths. \n\t\t(press any key to continue) ");
    console.log("\n\t\tThere are many other creatures that live down here.");
        sleep.sleep(2);
    console.log("\n\t\t[GUIDE] Some creatures you encounter will drop a special item, \n\t\t\twhich will count towards your final score if you make it out of this mountain alive.");
        sleep.sleep(4);
    ask.keyIn("\n\t\t\t[GUIDE] That should be all you need to know to begin, \n\t\t\t\tso when you are ready to start your journey, (press any key to continue)");


        ask.setDefaultOptions({
            limit: ['w', 'print', 'item']
        });


    //////////////////////
    ////// STAGE 1 /////// - Goal is to kill dragonKing to get lair key, which unlocks the final stage 2.
    //////////////////////


    while(stage1 === false){
        var choice = ask.question("\n\n\n\n\t[GUIDE] Type 'w' to continue walking, 'print' to check your status, or 'item' to use an item: ");
        if(choice === 'w'){
            walk();
            if(currentEnemy.health <= 0 && player.health > 0){
                battleResolution();
            } else if(player.health <= 0){
                stage2 = true;
                stage1 = true;
            }
        }

        if(player.loot.includes(" Lair Key")){
                sleep.sleep(1);
            ask.keyInYN("\n\n\n\n\t\tUpon defeat of the Dragon King, a key falls from it's scales.\n\t\t\tYou see behind the dragon's carcas a large doorway.\n\t\t\t\t(press any key to use the 'Lair Key')");
                doorwayImg();
                ask.keyInYN("\n\t\tYou use the 'Lair Key' to open the door, a fresh gust of air greets you.\n\t\t\tThis must be the way out of here!\n\t\t\t\t(press any key to continue)");
                stage1 = true;
           }

        if(choice === 'print'){
            console.log("\n\n\n\n\n\n\t\t\t\tPlayer 1\n\t\t\t\tName: " + player.name + "\n\t\t\t\tHealth: " + player.health + "\n\t\t\t\tLoot: " + player.loot);
        }

        if(choice === 'item'){
            usePotion();
        }

    }




    ////////////////////////
    /// INTRO TO STAGE 2 ///
    ////////////////////////

    if(player.health > 0){
        ask.keyInYN('\n\n\n\n\n\t[GUIDE] ' + player.name + '! I can barely believe you destroyed the Dragon King!\n\t\tWhile you have made it this far, you still have a little ways to go (press any key to continue)');
            sleep.msleep(600);
        ask.keyInYN('\n\n\t\t\t[GUIDE] You will need to walk a bit further to escape the mountain.\n\t\t\t\tI imagine you will need to defeat 5 more enemies to reach the exit.\n\t\t\t\t\tGood Luck! (Press anykey to continue)');
    };




    //////////////////////
    ////// STAGE 2 ///////
    //////////////////////

    while(stage2 === false){
        var choice = ask.question("\n\n\t[GUIDE] Type 'w' to continue walking, 'print' to check your status, or 'item' to use an item: ");

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

        if(choice === 'item'){
            usePotion();
        }
    }


        /////////////////////////////
        ///// END GAME SEQUENCE /////
        /////////////////////////////

    // final conditional to check if player health is <= 0, or if game has been won.
    // Check players loot and give a final score upon Victory.

    if(player.health <= 0){
        console.log("\n\n\n\n\n\n\n\t\t\t    _....._                 _....._     ");
        console.log("\t\t\t   / _. ._ \\     Y O U     / _. ._ \\    ");
        console.log("\t\t\t  | '-' '-' |   D I E D   | '-' '-' |   ");
        console.log("\t\t\t   \\  .^.  /               \\  .^.  /    ");
        console.log("\t\t\t    |HHHHH|     G A M E     |HHHHH|     ");
        console.log("\t\t\t     \\---/     O V E R !     \\---/       ");
        console.log("\t\t\t                                        ");
    } else {
        lootCounter();
            sleep.sleep(1);
        console.log("\n\n\n\n\t\t[GUIDE] Congratulations traveler, you successfully escaped the Mystic Mountain.\n\n\n");
            sleep.sleep(3);
        console.log("\t\t\tAfter tallying up all of your 'LOOT', your final score is " + score + '\n');
            sleep.sleep(3);
        console.log("\n\t\t\t  CCCCC  OOO  NN    N GGGGGG RRRR    AAA  TTTTTT  SSSSS");
        console.log("\t\t\t  C     O   O N  N  N G      R    R A   A   TT    S    ");
        console.log("\t\t\t  C     O   O N   N N G   GG RRRR   AAAAA   TT    SSSSS");
        console.log("\t\t\t  C     O   O N   N N G    G R   R  A   A   TT        S");
        console.log("\t\t\t  CCCCC  OOO  N    NN GGGGGG R    R A   A   TT    SSSSS");
        console.log("\t\t\t  ======================================================")
    }


    // HIGH SCORES //

// 1 - NATE - SCORE: 310;

////////////////////////////////////////////////////////////////////////////////////////////////////////////


/// EXTRAS //



// ANIMATIONS //

function doorwayImg(){
    console.log("\n\t\t\t_---___---___---___---___---___---_");
    console.log("\t\t\t_---___---___-_______-___---___---_");
    console.log("\t\t\t_---___---___/  ___  \\___---___---_");
    console.log("\t\t\t_---___---__| /  Ω  \\ |__---___---_");
    console.log("\t\t\t_---___---__| |     | |__---___---_");
    console.log("\t\t\t_---___---__| |    ˚| |__---___---_");
    console.log("\t\t\t_---___---__| | ___ | |__---___---_");
    console.log("\t\t\t_---___---__|/       \\|__---___---_");
    console.log("\t\t\t------------/         \\------------");
    console.log("\t\t\t-----------/           \\-----------");
};

function mysticMountainImg(){
    console.log('\n\n\n\t\t\t||--------------------------------------------||')
    console.log('\t\t\t||      MYSTIC         /\\       MOUNTAIN      ||');
    console.log('\t\t\t||                    /  \\                    ||');
    console.log('\t\t\t||        ^^         /    \\        ^^         ||');
    console.log('\t\t\t||          ^^      /      \\__            ^^  ||');
    console.log('\t\t\t||   ^^          __/    _     \\__    ^^       ||');
    console.log('\t\t\t||              /     _/ \\_      \\_           ||');
    console.log('\t\t\t||____/\\____ /\\/_____/_ ∆ _\\_______\\___/\\_o_/\\||');
    console.log('\t\t\t||_/\\____/\\_________/ - - - \\__/\\_________/\\__||');
    console.log('\t\t\t||____________/\\___/- - - - -\\_____/\\___/\\____||');
    console.log('\t\t\t||--------------------------------------------||');
}



function iTookAPotion(){
    console.log("\n\t\t\t     _       ");
    console.log("\t\t\t    |_|   ");
    console.log("\t\t\t   /   \\   ");
    console.log("\t\t\t  | ††† |   MMMmm, ");
    console.log("\t\t\t  |     |      Potion....");
    console.log("\t\t\t   \\___/    ");
}

function frame1(){
        console.log("\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t||||\\|||\\     /|||//||||");
        console.log("\t\t\t|||\\|||\\     /|||//|||||");
        console.log("\t\t\t||\\|||\\     /|||//|||||/");
        console.log("\t\t\t||\\|||\\     /|||//|||||/");
        console.log("\t\t\t||\\|||\\     /|||//|||||/");
        console.log("\t\t\t|||\\|||\\     /|||//|||||");
        console.log("\t\t\t||||\\|||\\  o  /|||//||||");
}

function frame2(){
        console.log("\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t||||\\|||\\     /|||//||||");
        console.log("\t\t\t|||\\|||\\     /|||//|||||");
        console.log("\t\t\t||\\|||\\     /|||//|||||/");
        console.log("\t\t\t||\\|||\\     /|||//|||||/");
        console.log("\t\t\t||\\|||\\     /|||//|||||/");
        console.log("\t\t\t|||\\|||\\  o  /|||//|||||");
        console.log("\t\t\t||||\\|||\\     /|||//||||");
}

function frame3(){
        console.log("\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t||||\\|||\\     /|||//||||");
        console.log("\t\t\t|||\\|||\\     /|||//|||||");
        console.log("\t\t\t||\\|||\\     /|||//|||||/");
        console.log("\t\t\t||\\|||\\     /|||//|||||/");
        console.log("\t\t\t||\\|||\\  o  /|||//|||||/");
        console.log("\t\t\t|||\\|||\\     /|||//|||||");
        console.log("\t\t\t||||\\|||\\     /|||//||||");
}

function frame4(){
        console.log("\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t||||\\|||\\     /|||//||||");
        console.log("\t\t\t|||\\|||\\     /|||//|||||");
        console.log("\t\t\t||\\|||\\     /|||//|||||/");
        console.log("\t\t\t||\\|||\\  o  /|||//|||||/");
        console.log("\t\t\t||\\|||\\     /|||//|||||/");
        console.log("\t\t\t|||\\|||\\     /|||//|||||");
        console.log("\t\t\t||||\\|||\\     /|||//||||");
}

function frame5 (){
        console.log("\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t||||\\|||\\     /|||//||||");
        console.log("\t\t\t|||\\|||\\     /|||//|||||");
        console.log("\t\t\t||\\|||\\  o  /|||//|||||/");
        console.log("\t\t\t||\\|||\\     /|||//|||||/");
        console.log("\t\t\t||\\|||\\     /|||//|||||/");
        console.log("\t\t\t|||\\|||\\     /|||//|||||");
        console.log("\t\t\t||||\\|||\\     /|||//||||");
}

function frame6(){
        console.log("\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t||||\\|||\\     /|||//||||");
        console.log("\t\t\t|||\\|||\\  o  /|||//|||||");
        console.log("\t\t\t||\\|||\\     /|||//|||||/");
        console.log("\t\t\t||\\|||\\     /|||//|||||/");
        console.log("\t\t\t||\\|||\\     /|||//|||||/");
        console.log("\t\t\t|||\\|||\\     /|||//|||||");
        console.log("\t\t\t||||\\|||\\     /|||//||||");
}

function frame7(){
        console.log("\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t||||\\|||\\  o  /|||//||||");
        console.log("\t\t\t|||\\|||\\     /|||//|||||");
        console.log("\t\t\t||\\|||\\     /|||//|||||/");
        console.log("\t\t\t||\\|||\\     /|||//|||||/");
        console.log("\t\t\t||\\|||\\     /|||//|||||/");
        console.log("\t\t\t|||\\|||\\     /|||//|||||");
        console.log("\t\t\t||||\\|||\\     /|||//||||");
}

function walkingMov(){
    frame1();
        sleep.msleep(250);
    frame2();
        sleep.msleep(250);
    frame3();
        sleep.msleep(250);
    frame4();
        sleep.msleep(250);
    frame5();
        sleep.msleep(250);
    frame6();
        sleep.msleep(250);
    frame7();
};
