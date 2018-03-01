const redux = require('redux')

export const contactList = [
    {
        name: 'Jerry Simpson',
        phone: '801-123-4567'
    }
]


export function addContact(newContact){
    return {
        type: "ADD_CONTACT",
        newContact
    }
}


function reducer(prevState = {contactList}, action){
    switch(action.type){
        case "ADD_CONTACT":
            return {
                contactList: [...prevState.contactList, action.newContact]
            }
        default:
            return prevState;
    }
}



export default reducer;
