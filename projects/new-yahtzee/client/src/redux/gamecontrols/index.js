import axios from 'axios'
import { setScorecard, generateScorecard } from '../scorecard'
import { retrieveStats } from '../stats'
import { checkDieStatus } from '../dicebox';

const gamecontrolAxios = axios.create()

gamecontrolAxios.interceptors.request.use((config)=>{  
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})


const initState = {
    allowPointSelection: false,
    allowRoll: false,
    gameOver: false,
}



export const gameControlToggler = rollCount => {
    switch(rollCount){
        case 0:
            return { type: "ALLOW_ROLL" }
        case 1:
        case 2:
            return { type: "ALLOW_ROLL" }
        case 3:
            return { type: "ALLOW_SELECTION" }
        default:
            return initState
    }
}


// Get status of scorecard, retrieve user assets onload
export const checkGameInProgress = user => {
    return dispatch => {
        return gamecontrolAxios.get(`/api/scorecard/${user._id}`)
            .then(res => {
                if(res.data[0].active){
                    dispatch( checkDieStatus( user ))
                    dispatch( setScorecard(res.data[0]) )
                } else {
                    dispatch( checkDieStatus( user ))
                    dispatch( generateScorecard( user ))
                }
                dispatch( retrieveStats( user ) )
            })
            .catch(err => {
                console.log(err)
            })
    }
}

// Save highscore following game end
export const saveHighscore = (score, user) => {
    return dispatch => {
        gamecontrolAxios.post('/api/highscores', {score, user})
            .then(res => {
                console.log("new score: " + score)
            })
            .catch(err => {
                console.log(err)
            })
    }
}

// Checks to see if all 13 required score sections have been filled to end game
export const checkGameOver = scorecard => {
        let gameOver = false
        let count = 0
        for(let key in scorecard){
            if(scorecard[key].selected){
                count++
            }
        }
        if(count === 13){
            gameOver = true
        }
        return {
            type: "CHECK_GAME_OVER",
            gameOver
        }
}




const gameControlsReducer = (state = initState, action) => {
    switch(action.type){
        case "ALLOW_ROLL":
            return {    
                allowPointSelection: false, 
                allowRoll: true,
                gameOver: false
            }
        case "ALLOW_SELECTION":
            return {
                allowPointSelection: true, 
                allowRoll: false,
                gameOver: false
            }
        case "CHECK_GAME_OVER":
            return {
                allowPointSelection: state.allowPointSelection, 
                allowRoll: state.allowRoll,
                gameOver: action.gameOver
            }
        default:
            return state
    }
}


export default gameControlsReducer