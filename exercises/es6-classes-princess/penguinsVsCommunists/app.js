(function(){

class Party {
    constructor(population){
        this.population = population;
    }
}


const penguins = new Party(1000000);
const communists = new Party(1000000);
let turn = "p";



const onHit = party => {
    let randomAttack = Math.floor(Math.random() * (110000 - 60000) + 60000)
    if(party === penguins){
        communists.population -= randomAttack;
        console.log(`Penguins killed ${randomAttack} Communists.  There are ${communists.population} Communists left!`)
    } else if(party === communists){
        penguins.population -= randomAttack;
        console.log(`Communists killed ${randomAttack} Penguins.  There are ${penguins.population} Penguins left!`)
    }
}


const onMiss = party => {
    if(party === penguins){
        console.log(`Penguins missed the Communists and their missle landed in the ocean`)
    } else if(party === communists){
        console.log(`Communists missed the Penguins and their bullets hit an iceberg`)
    }
}


// 1 in 2 chance to hit or miss
const sendNuke = (party, onHit, onMiss) => {
    let chance = Math.floor(Math.random() * 2);
    chance === 0 ? onHit(party) : onMiss(party)
}


// flip a coin to see who goes first //
const chance = Math.floor(Math.random() * 2);
    if(chance === 0){
        // Communists attack first
        sendNuke(communists, onHit, onMiss);
        currentTurn = "p"
    } else {
        // Penguins attack first
        sendNuke(penguins, onHit, onMiss)
        currentTurn = "c"
    }


// function that runs every 1 second alternating the turn //
const battleMode = () => {
    if(currentTurn === "p"){
        sendNuke(penguins, onHit, onMiss);
        currentTurn = "c";
    } else if(currentTurn === "c"){
        sendNuke(communists, onHit, onMiss);
        currentTurn = "p";
    }


    // check on every interval if either team has died and end the interval if so //
    if(penguins.population < 0) {
        console.log('Penguins have been defeated')
        clearInterval(war)
    } else if(communists.population < 0) {
        console.log('Communists have been defeated')
        clearInterval(war)
    }
}

const war = setInterval(battleMode, 1000)


}())
