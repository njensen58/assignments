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

const state = [{title: 'Naked Mole Rat', description: 'Kim Possible lied', imgUrl: 'https://pbs.twimg.com/media/C5Eb5DIUoAAVa6e.jpg'}]

function reducer(prevState = state, action){
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
