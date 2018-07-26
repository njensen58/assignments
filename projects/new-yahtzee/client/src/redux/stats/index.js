import axios from 'axios'
const statsAxios = axios.create()


statsAxios.interceptors.request.use((config)=>{  
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})


export const generateStatCard = user => {
    return dispatch => {
        statsAxios.post('/api/stats', {user: user._id})
            .then(res => {
                dispatch({
                    type: "GENERATE_STAT_CARD",
                    statCard: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const retrieveStats = user => {
    return dispatch => {
        statsAxios.get(`/api/stats/${user._id}`)
            .then(res => {
                dispatch({
                    type: "RETRIEVE_STATS",
                    stats: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}


const statsReducer = (state = {}, action) => {
    switch(action.type){
        case "GENERATE_STAT_CARD":
            return action.statCard
        case "RETRIEVE_STATS":
            return action.stats
        default:
            return state
    }
}


export default statsReducer