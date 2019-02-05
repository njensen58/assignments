import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import dice from './dicebox'
import scorecard from './scorecard'
import controls from './gamecontrols'
import user from './auth'


const rootReducer = combineReducers({
    user,
    scorecard,
    dice,
    controls
})


export default createStore(rootReducer, applyMiddleware( thunk ))