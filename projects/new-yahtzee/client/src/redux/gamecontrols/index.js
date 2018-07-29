import axios from 'axios'
import { setScorecard, generateScorecard } from '../scorecard'
import { retrieveStats } from '../stats'
import { checkDieStatus } from '../dicebox';
import store from '../../redux'

const gamecontrolAxios = axios.create()

gamecontrolAxios.interceptors.request.use((config)=>{  
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

console.log(store)


const initState = {
    allowPointSelection: false,
    allowRoll: false
}

// If you reset on rollCount 3, the refresh does not set allow Roll to false, it defaults to initState

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



const gameControlsReducer = (state = initState, action) => {
    switch(action.type){
        case "ALLOW_ROLL":
            return {    
                allowPointSelection: false, 
                allowRoll: true
            }
        case "ALLOW_SELECTION":
            return {
                allowPointSelection: true, 
                allowRoll: false 
            }
        default:
            return state
    }
}


export default gameControlsReducer