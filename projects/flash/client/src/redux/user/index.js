import axios from 'axios'
import { bindActionCreators } from '../../../node_modules/redux';


export const login = credentials => {
    return dispatch => {
        axios.post('/auth/login', credentials)
            .then(res => {

            })
            .catch(err => {
                console.log(err)
            })
    }
}


export const signup = credentials => {
    return dispatch => {
        axios.post('/auth/signup', credentials)
            .then(res => {

            })
            .catch(err => {
                console.log(err)
            })
    }
}



const initialState = {
    
}



const userReducer = (state = initialState, action) => {
        switch(action.type){
            case "AUTHENTICATE":
                return initialState
            default:
                return state
        }
}

export default userReducer;