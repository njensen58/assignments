const redux = require('redux')

const state = {
    contactList: [
        {
            name: 'Jerry Simpson',
            age: 29
        }
    ]
}



function addContact(newContact){
    return {
        type: "ADD_CONTACT",
        newContact
    }
}

function removeContact(contactName){
    return {
        type: "REMOVE_CONTACT",
        contactName
    }
}



function reducer(prevState = state, action){
    switch(action.type){
        case "ADD_CONTACT":
            return {
                contactList: [...prevState.contactList, action.newContact]
            }
        case "REMOVE_CONTACT":
            const updatedList = prevState.contactList.filter(contact=>{
                return contact.name !== action.contactName
            })
            return {
                contactList: [...updatedList]
            }
        default:
            return prevState
    }
}

const store = redux.createStore(reducer);

store.subscribe(()=> {
    console.log(store.getState())
})



console.log(state)
store.dispatch(addContact({name: 'Nate Jensen', age: 28}))
store.dispatch(addContact({name: 'Mary BoJangles', age: 27}))
store.dispatch(removeContact('Mary BoJangles'))
store.dispatch(removeContact('Jerry Simpson'))
