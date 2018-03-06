import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';


const question = [];
let currentCat = 'general';
const catDecider = (cat) => {
    if(cat === 'general'){
        currentCat = '9';
    }else if(cat === 'film'){
        currentCat = '11';
    }else if(cat === 'tv'){
        currentCat = '14';
    }else if(cat === 'history'){
        currentCat = '23';
    }else if(cat === 'celeb'){
        currentCat = '26';
    }else if(cat === 'geo'){
        currentCat = '22';
    }else if(cat === 'sports'){
        currentCat = '21';
    }
}


export function getQuestion(cat){
    catDecider(cat);
    return function(dispatch){
        axios.get('https://opentdb.com/api.php?amount=1&category=' + currentCat + '&type=multiple').then(response => {
            dispatch({
                type: 'GET_QUESTION',
                question: response.data.results
            })
        })
    }
}


function reducer(state = question, action){
    switch(action.type){
        case 'GET_QUESTION':
            return action.question
        default:
            return state
    }
}


export default createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);
