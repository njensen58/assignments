import axios from 'axios'

const scorecardAxios = axios.create();

scorecardAxios.interceptors.request.use((config)=>{  
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})


export const checkGameInProgress = id => {
    return dispatch => {
        scorecardAxios.get(`/${id}`)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const saveHighscore = (score, user) => {
    return dispatch => {
        scorecardAxios.post('/api/highscores', {score, user})
            .then(res => {
                console.log("new score: " + score)
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const updateScorecard = (id, updates) => {
    return dispatch => {
        scorecardAxios.put(`/api/highscores/${id}`, updates)
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


const scorecardReducer = (state = {}, action) => {
    switch(action.type){
        case "UPDATE_SCORECARD":
            return action.updatedCard
        default:
            return state
    }
}


export default scorecardReducer