import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import dice from './dicebox'
import scorecard from './scorecard'
import controls from './gamecontrols'
import user from './auth'
import stats from './stats'


const rootReducer = combineReducers({
    user,
    scorecard,
    dice,
    controls,
    stats
})




export default createStore(rootReducer, applyMiddleware( thunk ))