import axios from 'axios'


const scorecardAxios = axios.create();

scorecardAxios.interceptors.request.use((config)=>{  
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})



export const setScorecard = scorecard => {
    return {
        type: "SET_SCORECARD",
        scorecard
    }
}

// When user clicks on score box -> reveal current score options before score confirm/save
export const validatePoints = (arr, scoreType) => {
    // conditional switch to check score type, and run the appropriate function.
    switch(scoreType){
        case "ones":
            return { result: arr.reduce((total, number) => Number(number) === 1 ? total += 1 : total, 0), type: "default"}
        case "twos":
            return { result: arr.reduce((total, number) => Number(number) === 2 ? total += 2 : total, 0), type: "default"}
        case "threes":
            return { result: arr.reduce((total, number) => Number(number) === 3 ? total += 3 : total, 0), type: "default"}
        case "fours":
            return { result: arr.reduce((total, number) => Number(number) === 4 ? total += 4 : total, 0), type: "default"}
        case "fives":
            return { result: arr.reduce((total, number) => Number(number) === 5 ? total += 5 : total, 0), type: "default"}
        case "sixes":
            return { result: arr.reduce((total, number) => Number(number) === 6 ? total += 6 : total, 0), type: "default"}

        case "3ofK":
            const calculate3ofAKind = arr => {
                const obj = arr.reduce((obj, num) => { if(!obj[num]){ obj[num] = 1} else { obj[num]++ } return obj }, {})
                for(let key in obj){
                    if(obj[key] === 3){
                        return key * 3
                    }   
                }
                return 0 
            }
            return { type: "default", result: calculate3ofAKind(arr)}

        case "4ofK":
            const calculate4ofAKind = arr => {
                const obj = arr.reduce((obj, num) => { if(!obj[num]){ obj[num] = 1} else { obj[num]++ } return obj }, {})
                for(let key in obj){
                    if(obj[key] === 4){
                        return key * 4
                    }  
                }
                return 0
            }
            return { type: "default", result: calculate4ofAKind(arr) }

        case "smStrt":
            const calculateSmStrt = arr => {
                const sorted = arr.sort((a, b) => a - b)
                let count = 0;
                for(let i = 0; i < sorted.length - 1; i++){
                    if(sorted[i + 1] - 1 === sorted[i]){
                        count++
                    }
                }
                return count >= 3 ? 30 : 0
            }
            return { type: "default", result: calculateSmStrt(arr) }

        case "lgStrt":
            const calculateLgStrt = arr => {
                const sorted = arr.sort((a, b) => a - b)
                let count = 0;
                for(let i = 0; i < sorted.length - 1; i++){
                    if(sorted[i + 1] - 1 === sorted[i]){
                        count++
                    }
                }
                return count >= 4 ? 40 : 0
            }
            return { type: "default", result: calculateLgStrt(arr) }
        case "flHs":
            return ""
        case "chnc":
            return { result: arr.reduce((total, number) => total += number ,0), type: "default"}
        case "yahz":
            return ""
        case "yahzb":
            return ""
        default: 
            return "error in validating points"
    }
}


export const generateScorecard = user => {
    return dispatch => {
        scorecardAxios.post('/api/scorecard', {user: user._id})
            .then(res => {
                dispatch( setScorecard(res.data) )
            })
    }
}



export const updateScorecard = (id, updates) => {
    return dispatch => {
        scorecardAxios.put(`/api/scorecard/${id}`, updates)
            .then(res => {
                dispatch({
                    type: "UPDATE_SCORECARD",
                    updatedCard: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}



const scorecardReducer = (state = {}, action) => {
    switch(action.type){
        case "SET_SCORECARD":
            return action.scorecard
        case "UPDATE_SCORECARD":
            return action.updatedCard
        default:
            return state
    }
}


export default scorecardReducer