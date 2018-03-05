export function addThing(newThing){
    return {
        type: 'ADD_THING',
        newThing
    }
}

export function removeThing(thing){
    return {
        type: 'REMOVE_THING',
        thing
    }
}


function reducer(prevState = [], action){
    switch(action.type){
        case 'ADD_THING':
            return  [...prevState, action.newThing]
        case 'REMOVE_THING':
            let itemToRemove = action.thing
            return [...prevState.filter(thing => thing.title !== itemToRemove)]
        default:
            return prevState
    }
}



export default reducer;
