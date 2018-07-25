import axios from 'axios'
import { generateDicebox } from '../dicebox'
import { generateStatCard } from '../stats'
const authAxios = axios.create()


export const signup = userInfo => {
    return dispatch => {
        authAxios.post('/auth/signup', userInfo)
            .then(res => {
                const{ token, user } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", user)
                dispatch( authenticate(user) )
                dispatch( generateDicebox(user) )
                dispatch( generateStatCard(user) )
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const login = userInfo => {
    return dispatch => {
        authAxios.post('/auth/login', userInfo)
            .then(res => {
                const{ token, user } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", user)
                dispatch( authenticate(user) )
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    return {
        type: "LOGOUT"
    }
}

const authenticate = user => {
    return {
        type: "AUTHENTICATE",
        user
    }
}


const initState = {  
    username: "",
    isAdmin: false,
    isAuthenticated: false
}


const authReducer = (state = initState, action) => {
    switch(action.type){
        case "AUTHENTICATE":
            return {
                ...state,
                ...action.user,
                isAuthenticated: true
            }
        case "LOGOUT":
            return initState
        default:
            return state
    }
}

export default authReducer