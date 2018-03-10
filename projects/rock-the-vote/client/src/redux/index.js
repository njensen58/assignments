import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';



const orderTopicsByVote = topics => topics.sort((a, b) => Number(a.votes) < Number(b.votes));


/////////////
// ACTIONS //

export function getTopics(){
    return function(dispatch){
        return axios.get('/topics').then(response => {
            orderTopicsByVote(response.data)
            dispatch({
                type: 'GET_TOPICS',
                topics: response.data
            })
        })
    }
}

export function addTopic(newTopic){
    return function(dispatch){
        return axios.post('/topics', newTopic).then(response => {
            dispatch({
                type: 'ADD_TOPIC',
                newTopic: response.data
            })
        })
    }
}



/////////////
// REDUCER //

function reducer(state = {}, action){
    switch(action.type){
        case 'GET_TOPICS':
            return {
                topics: action.topics
            }
        case 'ADD_TOPIC':
            return {
                topics: [...state, action.newTopic]
            }
        default:
            return state
    }
}




export default createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);
