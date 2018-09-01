class Penguins {
    constructor(name, population){
        this.name = name
        this.population = population
    }
}

class Communists {
    constructor(name, population){
        this.name = name
        this.population = population
    }
}

const penguins = new Penguins("Penguins", 1000000)
const communists = new Communists("Communists", 1000000)

const randomAttack = () => Math.floor(Math.random() * 90000 + 60000)

const onHit = (party, attackingParty) => {
    const attackPow = randomAttack()
    party.population -= attackPow
    console.log(`The ${party.name} were hit by the ${attackingParty} for ${attackPow}`)
    if(party.population <= 0){
        clearInterval(intID)
        console.log(`The ${party.name} were obliterated by ${attackingParty}....  The End.`)
    }
}

const onMiss = (party, attackingParty) => {
    console.log(`The ${party.name} were spared as the ${attackingParty}'s nuke fell in the ocean`)
} 

const chance = () => Math.floor(Math.random() * 2)

const sendNuke = (party, onHit, onMiss) => {
    const attackChance = chance()
    let attackingParty;
    if(party.name === "Penguins"){
        attackingParty = "Communists"
    } else {
        attackingParty = "Penguins"
    }
    if(attackChance === 0){
        onHit(party, attackingParty)
    } else {
        onMiss(party, attackingParty)
    }
}

// Toggles
let startingParty = chance() === 0 ? penguins : communists
let secondParty = startingParty === penguins ? communists : penguins
let currentTurn = startingParty

// Alternate turns and call sendNuke
const intID = setInterval(function(){
    if(currentTurn === "Penguins"){
        sendNuke(secondParty, onHit, onMiss)
        currentTurn = "Communists"
    } else {
        sendNuke(startingParty, onHit, onMiss)
        currentTurn = "Penguins"
    }
}, 800)
