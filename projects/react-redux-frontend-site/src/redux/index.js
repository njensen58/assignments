import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const randomQUrl = 'https://opentdb.com/api.php?amount=1&category=9&type=multiple'

const question = []

export function getQuestion(){
    return function(dispatch){
        axios.get(randomQUrl).then(response => {
            dispatch({
                type: 'GET_QUESTION',
                question: response.data.results
            })
        })
    }
}


function reducer(prevState = question, action){
    switch(action.type){
        case 'GET_QUESTION':
            return action.question
        default:
            return prevState
    }
}


export default createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);
