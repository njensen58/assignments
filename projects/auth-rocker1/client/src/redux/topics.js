import axios from 'axios';

axios.interceptors.request.use(config => {
    const token = localStorage.token;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})



const initialState = {
    topics: []
}

/////////////
// ACTIONS //

export function getTopics(){
    return function(dispatch){
        return axios.get('/topics').then(response => {
            dispatch({
                type: 'GET_TOPICS',
                topics: response.data
            })
        })
    }
}

export function addTopic(newTopic){
    return function(dispatch){
        return axios.post('/api/authTopics', newTopic).then(response => {
            dispatch({
                type: 'ADD_TOPIC',
                newTopic: response.data
            })
        })
    }
}

export function deleteTopic(id){
    return function(dispatch){
        return axios.delete('/api/authTopics/' + id).then(response => {
            dispatch(getTopics());
        })
        .catch(err => {
            console.error(err);
        })
    }
}

export function upVote(id, updatedTopic){
    return function(dispatch){
        return axios.put('/api/authTopics/' + id, updatedTopic).then(response => {
            dispatch(getTopics());
        })
        .catch(err => {
            console.error(err);
        })
    }
}

export function downVote(id, updatedTopic){
    return function(dispatch){
        return axios.put('/api/authTopics/' + id, updatedTopic).then(response => {
            dispatch(getTopics());
        })
        .catch(err => {
            console.error(err);
        })
    }
}

/////////////
// REDUCER //

function reducer(state = initialState, action){
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

export default reducer;
