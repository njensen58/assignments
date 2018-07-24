import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import cards from './flashcards'
import decks from './decks'
import user from './user'


const rootReducer = combineReducers({
    cards,
    decks,
    user
})


export default createStore(
    rootReducer,
    applyMiddleware(thunk)
)
