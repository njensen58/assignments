import axios from 'axios';

const initialState = {
    username: '',
    isAdmin: false,
    isAuthenticated: false
}

export function signup(userInfo){
    return dispatch => {
        axios.post('/auth/signup', userInfo)
            .then(response => {
                const {token, user} = response.data;
                localStorage.token = token;
                localStorage.user = JSON.stringify(user);
                dispatch(authenticate(user))
            })
            .catch(err => {
                console.error(err);
            })
    }
}

export function login(credentials){
    return dispatch => {
        axios.post('/auth/login', credentials)
            .then(response => {
                const {token, user} = response.data;
                localStorage.token = token;
                localStorage.user = JSON.stringify(user);
                dispatch(authenticate(user));
            })
            .catch((err) => {
                console.error(err);
            })
    }
}

export function logout(){
    delete localStorage.token;
    delete localStorage.user;
    return {
        type: "LOGOUT"
    }
}

export function authenticate(user) {
    return {
        type: "AUTHENTICATE",
        user
    }
}


function reducer(state = initialState, action){
    switch(action.type) {
        case "AUTHENTICATE":
            return {
                ...state,
                ...action.user,
                isAuthenticated: true
            }
        case "LOGOUT":
            return initialState;
        default:
            return state;
    }
}

export default reducer;
