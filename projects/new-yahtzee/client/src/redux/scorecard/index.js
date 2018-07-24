import axios from 'axios'

const initState = {
    twos: {
        selected: false,
        score: 0
    },
    threes: {
        selected: false,
        score: 0
    },
    fours: {
        selected: false,
        score: 0
    },
    fives: {
        selected: false,
        score: 0
    },
    sixes: {
        selected: false,
        score: 0
    },
    threeOfAKind: {
        selected: false,
        score: 0
    },
    fourOfAKind: {
        selected: false,
        score: 0
    },
    smallStraight: {
        selected: false,
        score: 0
    },
    largeStraight: {
        selected: false,
        score: 0
    },
    fullHouse: {
        selected: false,
        score: 0
    },
    bonus: {
        selected: false,
        score: 0
    },
    yahtzee: {
        selected: false,
        score: 0
    },
    chance: {
        selected: false,
        score: 0
    },
    lowerBonus: {
        selected: false,
        score: 0
    },
    upperBonus: {
        selected: false,
        score: 0
    }
}


export const resetScorecard = () => {
    return {
        type: "RESET_SCORECARD"
    }
}

export const saveHighscore = (score, user) => {
    return dispatch => {
        axios.post('/api/highscores', {score, user})
            .then(res => {
                console.log("new score: " + score)
            })
            .catch(err => {
                console.log(err)
            })
    }
}


const scorecardReducer = (state = initState, action) => {
    switch(action.type){
        case "RESET_SCORECARD":
            return initState
        default:
            return state
    }
}


export default scorecardReducer