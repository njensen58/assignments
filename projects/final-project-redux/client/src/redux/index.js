import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import scorecard from './scorecard'
import controls from './controls';


const rootReducer = combineReducers({
    scorecard,
    controls
})



export default createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);
