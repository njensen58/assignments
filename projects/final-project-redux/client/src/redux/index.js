import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import scorecard from './scorecard';
import highscores from './highscores';
import controls from './controls';
import gamecontrol from './gamecontrol';


const rootReducer = combineReducers({
    scorecard,
    controls,
    gamecontrol,
    highscores
})



export default createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);
