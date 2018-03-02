import { createStore } from 'redux';

const uglyThings = [
    {
        title: 'practice',
        imgUrl: 'img',
        description: 'stuff'
    }
];


export function addThing(newThing){
    return {
        type: 'ADD_THING',
        newThing
    }
}


function reducer(prevState = {uglyThings}, action){
    switch(action.type){
        case 'ADD_THING':
            return {
                uglyThings: [...prevState.uglyThings, action.newThing]
            }
        default:
            return {
                prevState
            }
    }
}



export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
