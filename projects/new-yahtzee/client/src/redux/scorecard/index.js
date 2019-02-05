import axios from 'axios'
import { resetDie } from '../dicebox';


const scorecardAxios = axios.create();


scorecardAxios.interceptors.request.use((config)=>{  
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})





const initState = {
    ones:          { score: 0, selected: false },
    twos:          { score: 0, selected: false },
    threes:        { score: 0, selected: false },
    fours:         { score: 0, selected: false },
    fives:         { score: 0, selected: false },
    sixes:         { score: 0, selected: false },
    threeOfAKind:  { score: 0, selected: false },
    fourOfAKind:   { score: 0, selected: false },
    smallStraight: { score: 0, selected: false },
    largeStraight: { score: 0, selected: false },
    fullHouse:     { score: 0, selected: false },
    chance:        { score: 0, selected: false },
    yahtzee:       { score: 0, selected: false },
    bonus:         { score: 0, selected: false }
}


// When user clicks on score box -> reveal current score options before score confirm/save
export const validatePoints = (arr, scoreType, scorecard) => {
    // conditional switch to check score type, and run the appropriate function.
    switch(scoreType){
        case "ones":
            return { result: arr.reduce((total, number) => Number(number) === 1 ? total += 1 : total, 0), type: "default"}
        case "twos":
            return { result: arr.reduce((total, number) => Number(number) === 2 ? total += 2 : total, 0), type: "default"}
        case "threes":
            return { result: arr.reduce((total, number) => Number(number) === 3 ? total += 3 : total, 0), type: "default"}
        case "fours":
            return { result: arr.reduce((total, number) => Number(number) === 4 ? total += 4 : total, 0), type: "default"}
        case "fives":
            return { result: arr.reduce((total, number) => Number(number) === 5 ? total += 5 : total, 0), type: "default"}
        case "sixes":
            return { result: arr.reduce((total, number) => Number(number) === 6 ? total += 6 : total, 0), type: "default"}
        // 3 OF A KIND //
        case "threeOfAKind":
            const calculate3ofAKind = arr => {
                const obj = arr.reduce((obj, num) => { if(!obj[num]){ obj[num] = 1} else { obj[num]++ } return obj }, {})
                for(let key in obj){
                    if(obj[key] >= 3){
                        return key * 3
                    }   
                }
                return 0 
            }
            return { type: "default", result: calculate3ofAKind(arr)}
        // 4 OF A KIND //
        case "fourOfAKind":
            const calculate4ofAKind = arr => {
                const obj = arr.reduce((obj, num) => { if(!obj[num]){ obj[num] = 1} else { obj[num]++ } return obj }, {})
                for(let key in obj){
                    if(obj[key] === 4){
                        return key * 4
                    }  
                }
                return 0
            }
            return { type: "default", result: calculate4ofAKind(arr) }
        // SMALL STRAIGHT //
        case "smallStraight":
            const calculateSmStrt = arr => {
                const sorted = arr.sort((a, b) => a - b)
                let count = 0;
                for(let i = 0; i < sorted.length - 1; i++){
                    if(sorted[i + 1] - 1 === sorted[i]){
                        count++
                    }
                }
                return count >= 3 ? 30 : 0
            }
            return { type: "default", result: calculateSmStrt(arr) }
        // LARGE STRAIGHT //
        case "largeStraight":
            const calculateLgStrt = arr => {
                const sorted = arr.sort((a, b) => a - b)
                let count = 0;
                for(let i = 0; i < sorted.length - 1; i++){
                    if(sorted[i + 1] - 1 === sorted[i]){
                        count++
                    }
                }
                return count >= 4 ? 40 : 0
            }
            return { type: "default", result: calculateLgStrt(arr) }
        // FULL HOUSE //
        case "fullHouse":
            const calculateFullHouse = arr => {
                const obj = arr.reduce((obj, num) => { if( !obj[num] ){ obj[num] = 1 } else { obj[num]++ } return obj }, {})
                for(let key in obj){
                    if(obj[key] === 2){
                        for(let key2 in obj){
                            if(obj[key2] === 3){
                                return 40
                            }
                        }
                    }
                }
                return 0
            }
        return { type: "default", result: calculateFullHouse(arr) }
        // CHANCE //
        case "chance":
            return { result: arr.reduce((total, number) => total += number ,0), type: "default"}
        // YAHTZEE //
        case "yahtzee":
            const calculateYahtzee = arr => {
                const obj = arr.reduce((obj, num) => { if( !obj[num] ){ obj[num] = 1 } else { obj[num]++ } return obj }, {})
                return Array.from(Object.keys(obj)).length === 1 ? 50 : 0
            }
            return { type: "default", result: calculateYahtzee(arr) }
        // YAHTZEE BONUS
        case "bonus":
            if(calculateYahtzee(arr) === 50){
                return { type: "default", result: scorecard.bonus.score + 100 }
            } else {
                return { type: "default", result: scorecard.bonus.score }
            }
            // Code to only allow yahtzee bonus selection if current yahtzee && yahtzee score is over 1
        default: 
            return "error in validating points"
    }
}


export const setScorecard = scorecard => {
    return {
        type: "SET_SCORECARD",
        scorecard
    }
}

export const generateScorecard = user => {
    return dispatch => {
        scorecardAxios.post('/api/scorecard', {user: user._id})
            .then(res => {
                dispatch( setScorecard(res.data) )
            })
    }
}


 

// On score select, save points, reset die, and allow new roll
export const updateScorecard = (user, updates) => {
    return dispatch => {
        return scorecardAxios.put(`/api/scorecard/${user._id}`, updates)
            .then(res => {
                dispatch({
                    type: "UPDATE_SCORECARD",
                    updatedCard: res.data
                })
                dispatch (resetDie(user) )
                dispatch({ type: "ALLOW_ROLL" })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

// Update db score amount for clicked item, but maintain selected as false
export const updateScoreSelect = (user, updates) => {
    return dispatch => {
        scorecardAxios.put(`/api/scorecard/${user._id}`, updates)
            .then(res => {
                dispatch({
                    type: "UPDATE_SCORECARD",
                    updatedCard: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}


const scorecardReducer = (state = initState, action) => {
    switch(action.type){
        case "SET_SCORECARD":
            return action.scorecard
        case "UPDATE_SCORECARD":
            return action.updatedCard
        default:
            return state
    }
}

export default scorecardReducer