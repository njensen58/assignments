import axios from 'axios'

const scorecardAxios = axios.create();

scorecardAxios.interceptors.request.use((config)=>{  
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})



const setScorecard = scorecard => {
    return {
        type: "SET_SCORECARD",
        scorecard
    }
}


export const checkGameInProgress = user => {
    return dispatch => {
        scorecardAxios.get(`/api/scorecard/${user._id}`)
            .then(res => {
                console.log(res.data)
                if(res.data.active){
                    dispatch( setScorecard(res.data) )
                } else {
                    dispatch( generateScorecard( user._id ))
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const generateScorecard = user => {
    console.log(user)
    return dispatch => {
        scorecardAxios.post('/api/scorecard', {user: user})
            .then(res => {
                dispatch( setScorecard(res.data) )
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
        case "SET_SCORECARD":
            return action.scorecard
        case "UPDATE_SCORECARD":
            return action.updatedCard
        default:
            return state
    }
}


export default scorecardReducer