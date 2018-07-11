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


const deckReducer = (state = [], action) => {
    switch(action.type){
        case "GET_DECKS":
            return [...action.decks]
        default:
            return state
    }
}

export default deckReducer
