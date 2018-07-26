import axios from 'axios'
import { setScorecard, generateScorecard } from '../scorecard'
import { retrieveStats } from '../stats'

const gamecontrolAxios = axios.create()

gamecontrolAxios.interceptors.request.use((config)=>{  
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})



const initState = {}

export const checkGameInProgress = user => {
    return dispatch => {
        gamecontrolAxios.get(`/api/scorecard/${user._id}`)
            .then(res => {
                if(res.data[0].active){
                    dispatch( setScorecard(res.data) )
                } else {
                    dispatch( generateScorecard( user ))
                }
                dispatch( retrieveStats( user ) )
            })
            .catch(err => {
                console.log(err)
            })
    }
}


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
        default:
            return state
    }
}


export default gameControlsReducer