import axios from 'axios'

const diceboxAxios = axios.create()

diceboxAxios.interceptors.request.use((config)=>{  
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})


const initState = {
    rollCount: 0,
    currentRoll: [],
    savedDie: []
}

export const generateDicebox = user => {
    return dispatch => {
        diceboxAxios.post('/api/dicebox', {user: user._id})
            .then(res => {
                dispatch({
                    type: "GENERATE_DICEBOX",
                    dicebox: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}


const dieReducer = (state = initState, action) =>{
    switch(action.type){
        case "GENERATE_DICEBOX":
            return action.dicebox
        default:
            return state
    }
}

export default dieReducer