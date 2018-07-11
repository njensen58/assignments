import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import cards from './flashcards'
import decks from './decks'

const rootReducer = combineReducers({
    cards,
    decks
})


export default createStore(
    rootReducer,
    applyMiddleware(thunk)
)
