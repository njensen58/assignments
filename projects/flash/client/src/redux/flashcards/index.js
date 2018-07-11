
import axios from 'axios'

export const getCards = id => {
    return dispatch => {
        axios.get(`/cards/${id}`).then(res => {
            dispatch({
                type: "GET_CARDS",
                cards: res.data
            })
        }).catch(err => console.log(err))
    }
}

export const addCard = newCard => {
    return dispatch => {
        axios.post(`/cards`, newCard).then(res => {
            dispatch({
                type: "ADD_CARD",
                newCard: res.data
            })
        }).catch(err => console.log(err))
    }
}

export const resetCards = () => {
    return {
        type: "RESET_CARDS"
    }
}


const flashcardsReducer = (state = [], action) => {
    switch(action.type){
        case "GET_CARDS":
            return [...action.cards]
        case "ADD_CARD":
            return [...state, action.newCard]
        case "RESET_CARDS":
            return []
        default:
            return state
    }
}

export default flashcardsReducer
