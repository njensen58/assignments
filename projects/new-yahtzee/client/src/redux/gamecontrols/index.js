import axios from 'axios'


const initState = {}


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

const gameControlsReducer = (state = initState, action) => {
    switch(action.type){
        default:
            return state
    }
}


export default gameControlsReducer