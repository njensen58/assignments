import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';


const scorecard = {
    ones: 0,
    twos: 0,
    threes: 0,
    fours: 0,
    fives: 0,
    sixes: 0
}

export function updateScorecard(update){
    return {
        type: "UPDATE_SCORECARD",
        update
    }
}

function reducer(state = scorecard, action){
    switch(action.type){
        case "UPDATE_SCORECARD":
            return {

            }
        default:
            return state
    }
}


export default createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);
