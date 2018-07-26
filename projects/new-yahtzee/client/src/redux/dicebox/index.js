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
    savedDie: [],
    die1: {
        value: 0,
        selected: false
    },
    die2: {
        value: 0,
        selected: false
    },
    die3: {
        value: 0,
        selected: false
    },
    die4: {
        value: 0,
        selected: false
    },
    die5: {
        value: 0,
        selected: false
    }
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

export const checkDieStatus = user => {
    return dispatch => {
        return diceboxAxios.get(`/api/dicebox/${user._id}`)
            .then(res => {
                dispatch({
                    type: "CHECK_DIE_STATUS",
                    dicebox: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const roll = (user, newDicebox)=> {
    return dispatch => {
        return diceboxAxios.put(`/api/dicebox/${user._id}`, {user, newDicebox})
            .then(res => {
                dispatch({
                    type: "ROLL",
                    dicebox: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const generateRandomDie = () => {

}


const dieReducer = (state = initState, action) =>{
    switch(action.type){
        case "GENERATE_DICEBOX":
            return action.dicebox
        case "CHECK_DIE_STATUS":
            return action.dicebox
        case "ROLL":
            return action.dicebox
        default:
            return state
    }
}

export default dieReducer