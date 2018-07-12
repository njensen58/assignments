import axios from 'axios'


export const getDecks = () => {
    return dispatch => {
        axios.get('/deck').then(res => {
            dispatch({
                type: "GET_DECKS",
                decks: res.data
            })
        }).catch(err => console.log(err))
    }
}

export const addDeck = deck => {
    return dispatch => {
        axios.post('/deck', deck).then(res => {
            dispatch({
                type: "ADD_DECK",
                deck: res.data
            })
        })
    }
}


const deckReducer = (state = [], action) => {
    switch(action.type){
        case "GET_DECKS":
            return [...action.decks]
        case "ADD_DECK":
            return [...state, action.deck]
        default:
            return state
    }
}

export default deckReducer
