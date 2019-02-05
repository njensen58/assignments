import axios from 'axios'

const initState = {
    highscores: []
}





const highscoreReducer = (prevState = initState, action) => {
    switch(action.type){
        default:
            return prevState
    }
}


export default highscoreReducer
