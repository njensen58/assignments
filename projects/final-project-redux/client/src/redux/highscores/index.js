import axios from 'axios';

const sortHighScores = (arr) => arr.sort((a, b) => parseInt(a.score) < parseInt(b.score));

export function getHigh(){
    return function(dispatch){
        return axios.get('/highscores').then(response => {
            sortHighScores(response.data)
            dispatch({
                type: "GET_HIGH",
                highscores: response.data
            })
        })
    }
}

export function addHighScore(newHighScore){
    return function(dispatch){
        return axios.post('/highscores', newHighScore).then(response => {
            dispatch({
                type: "ADD_HIGH_SCORE",
                newHighScore: response.data
            })
        })
    }
}


function reducer(state = {}, action){
    switch(action.type){
        case "GET_HIGH":
            return {
                highscores: action.highscores
            }
        case "ADD_HIGH_SCORE":
            return {
                highscores: [...state, action.newHighScore]
            }
        default:
            return state
    }
}


export default reducer;
