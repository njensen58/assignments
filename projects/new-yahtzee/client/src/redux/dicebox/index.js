import axios from 'axios'
import { gameControlToggler } from '../gamecontrols'

const diceboxAxios = axios.create()

diceboxAxios.interceptors.request.use((config)=>{  
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

// INIT STATE //
const initState = {
    rollCount: 0,
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

// Only used on signup to create user's single dicebox
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

// Get most recent die and roll onload
export const checkDieStatus = user => {
    return dispatch => {
        diceboxAxios.get(`/api/dicebox/${user._id}`)
            .then(res => {
                console.log(res.data)
                dispatch({
                    type: "CHECK_DIE_STATUS",
                    dicebox: res.data
                })
                dispatch( gameControlToggler(res.data.rollCount) )
            })
            .catch(err => {
                console.log(err)
            })
    }
}

// Update db with current roll results
export const roll = (user, updatedDice) => {
    return dispatch => {
        diceboxAxios.put(`/api/dicebox/${user._id}`, {user, updatedDice})
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

// change specific die 'seleted' status to true/false
export const saveDie = (user, die) => {
    return dispatch => {
        diceboxAxios.put(`/api/dicebox/die/${user._id}`, die)
            .then(res => {
                dispatch({
                    type: "SAVE_DIE",
                    dicebox: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}


// Return dice state to initState on score selection / newGame
export const resetDie = user => {
    return dispatch => {
        diceboxAxios.put(`/api/dicebox/${user._id}`, {updatedDice: initState})
            .then(res => {
                dispatch({ type: "RESET_DIE" })
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
        case "CHECK_DIE_STATUS":
            return action.dicebox
        case "ROLL":
            return action.dicebox
        case "SAVE_DIE":
            return action.dicebox
        case "RESET_DIE":
            return initState
        default:
            return state
    }
}

export default dieReducer