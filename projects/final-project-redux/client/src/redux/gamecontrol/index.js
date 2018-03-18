const gameControl = {
    ones: false,
    twos: false,
    threes: false,
    fours: false,
    fives: false,
    sixes: false,
    threeOfAKind: false,
    fourOfAKind: false,
    fullHouse: false,
    smallStraight: false,
    largeStraight: false,
    yahtzee: false,
    chance: false
}


export function updateGameControl(section){
    return {
        type: "UPDATE_GAME_CONTROL",
        section
    }
}

export function restartGame(){
    return {
        type: "RESTART_GAME"
    }
}


function reducer(state = gameControl, action){
    switch(action.type){
    case "UPDATE_GAME_CONTROL":
        return {
            ...state,
            [action.section]: true
        }
    case "RESTART_GAME":
        return {
            ones: false,
            twos: false,
            threes: false,
            fours: false,
            fives: false,
            sixes: false,
            threeOfAKind: false,
            fourOfAKind: false,
            fullHouse: false,
            smallStraight: false,
            largeStraight: false,
            yahtzee: false,
            chance: false
        }
        default:
            return state
    }
}



export default reducer;
