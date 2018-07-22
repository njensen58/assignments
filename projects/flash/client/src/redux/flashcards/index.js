import axios from 'axios'


const shuffle = arr => {
  var currentIndex = arr.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }

  return arr;
}

export const getCards = id => {
    return dispatch => {
        axios.get(`/cards/${id}`).then(res => {
            dispatch({
                type: "GET_CARDS",
                cards: res.data
            })
        }).catch(err => console.log(err))
    }
}

export const addCard = newCard => {
    return dispatch => {
        axios.post(`/cards`, newCard).then(res => {
            dispatch({
                type: "ADD_CARD",
                newCard: res.data
            })
        }).catch(err => console.log(err))
    }
}

export const resetCards = () => {
    return {
        type: "RESET_CARDS"
    }
}



const flashcardsReducer = (state = [], action) => {
    switch(action.type){
        case "GET_CARDS":
            return shuffle(action.cards)
        case "ADD_CARD":
            return [...state, action.newCard]
        case "RESET_CARDS":
            return []
        default:
            return state
    }
}

export default flashcardsReducer
