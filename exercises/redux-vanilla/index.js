const redux = require('redux');

const state = {
    counter: 0
}



/////////////////////
// ACTION CREATORS //

function increment(){
    return {
        type: 'INCREMENT'
    }
}

function set(num){
    return {
        type: 'SET',
        num
    }
}

function dubs(){
    return {
        type: 'DUBS'
    }
}



/////////////
// REDUCER //

function reducer(prevState = state, action){
    switch(action.type){
        case "INCREMENT":
            return {
                counter: prevState.counter + 1
            }
        case 'SET':
            return {
                counter: action.num
            }
        case 'DUBS':
            return {
                counter: prevState.counter * 2
            }
        default:
            return prevState
    }
}

const store = redux.createStore(reducer);



store.subscribe(()=> {
    console.log(store.getState())
})




//////////////////////////////////////
// DISPATCH, WHICH SENDS THE UPDATE //

store.dispatch(set(3))
store.dispatch(dubs())








/**/
