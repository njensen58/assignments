import { createStore, combineReducers, applyMiddleware } from 'redux'
import dice from './dicebox'
import scorecard from './scorecard'
import controls from './gamecontrols'


const rootReducer = combineReducers({
    scorecard,
    dice,
    controls
})




export default createStore(rootReducer)