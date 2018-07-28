import axios from 'axios'

const scorecardAxios = axios.create();

scorecardAxios.interceptors.request.use((config)=>{  
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})



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


export const updateScorecard = (id, updates) => {
    return dispatch => {
        scorecardAxios.put(`/api/scorecard/${id}`, updates)
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