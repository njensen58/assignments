import dotenv from "dotenv";
import config from '../../config.js';
const axios = require('axios');
const newsAxios = axios.create();
dotenv.config()

const TOKEN = config.TOKEN

newsAxios.interceptors.request.use(config => {
    const token = TOKEN;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

export function getTopStories(){
    return dispatch => {
        return newsAxios.get('https://newsapi.org/v2/top-headlines?country=us').then(response => {
            dispatch({
                type: "GET_TOP_STORIES",
                topStories: response.data.articles
            })
        })
    }
}


function reducer(state = {}, action){
    switch(action.type){
        case "GET_TOP_STORIES":
            return action.topStories
        default:
            return state;
    }
}


export default reducer;
