const scorecard = {
    ones: 0,
    twos: 0,
    threes: 0,
    fours: 0,
    fives: 0,
    sixes: 0,
    threeOfAKind: 0,
    fourOfAKind: 0,
    fullHouse: 0,
    smallStraight: 0
}

export function updateScorecard(update, section){
    return {
        type: "UPDATE_SCORECARD",
        update,
        section
    }
}

function reducer(state = scorecard, action){
    switch(action.type){
        case "UPDATE_SCORECARD":
            return {
                ...state,
                [action.section]: action.update
            }
        default:
            return state
    }
}



export default reducer;
