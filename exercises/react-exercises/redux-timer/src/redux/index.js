export function startTimer(){
    return {
        type: "START_TIMER"
    }
}

export function resetTimer(){
    return {
        type: "RESET_TIMER"
    }
}

export function makeLap(){
    return {
        type: "MAKE_LAP"
    }
}


function reducer(prevState = {minutes: 0, seconds: 0, laps: []}, action){
    switch(action.type){
        case 'START_TIMER':
            return {
                ...prevState,
                seconds: prevState.seconds < 59 ? prevState.seconds + 1 : 0,
                minutes: prevState.seconds === 59 ? prevState.minutes + 1 : prevState.minutes
            }
        case 'RESET_TIMER':
            return {
                ...prevState,
                seconds: 0,
                minutes: 0
            }
        case 'MAKE_LAP':
            return {
                ...prevState,
                laps: [...prevState.laps, prevState.minutes + ":" + prevState.seconds]
            }
        default:
            return prevState;
    }
}


export default reducer;
