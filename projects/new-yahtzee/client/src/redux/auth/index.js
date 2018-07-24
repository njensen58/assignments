import axios from 'axios'


export const signup = userInfo => {
    return dispatch => {
        axios.post('/auth/signup', userInfo)
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

export const login = userInfo => {
    return dispatch => {
        axios.post('/auth/login', userInfo)
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



const initState = {  
    username: "",
    isAdmin: false,
    isAuthenticated: false
}

const authenticate = user => {
    return {
        type: "AUTHENTICATE",
        user
    }
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