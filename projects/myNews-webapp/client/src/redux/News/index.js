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

const initialState = {
    news: [],
    currentCountry: 'us'
}



export function getTopStories(newCountry){
    if(newCountry){
        initialState.currentCountry = newCountry
    }
    return dispatch => {
        return newsAxios.get(`https://newsapi.org/v2/top-headlines?country=${initialState.currentCountry}`).then(response => {
            let filteredArticles = response.data.articles.filter(article => article.description !== null && article.urlToImage !== null && article.source.name !== 'Liveleak.com')
            dispatch({
                type: "GET_TOP_STORIES",
                news: filteredArticles
            })
        })
    }
}

export function getSearchStories(userInput){
    return dispatch => {
        return newsAxios.get(`https://newsapi.org/v2/everything?q=${userInput}`).then(response => {
            let filteredArticles = response.data.articles.filter(article => article.description !== null && article.urlToImage !== null && article.source.name !== 'Liveleak.com')
            dispatch({
                type: "GET_SEARCH_STORIES",
                news: filteredArticles
            })
        })
    }
}

export function getSourceStories(userInput){
    return dispatch => {
        return newsAxios.get(`https://newsapi.org/v2/top-headlines?sources=${userInput}`).then(response => {
            let filteredArticles = response.data.articles.filter(article => article.description !== null && article.urlToImage !== null && article.source.name !== 'Liveleak.com')
            dispatch({
                type: "GET_SOURCE_STORIES",
                news: filteredArticles
            })
        })
    }
}

function reducer(state = initialState, action){
    switch(action.type){
        case "GET_TOP_STORIES":
            return {
                news: action.news
            }
        case "GET_SEARCH_STORIES":
            return {
                news: action.news
            }
        case "GET_SOURCE_STORIES":
            return {
                news: action.news
            }
        default:
            return state;
    }
}


export default reducer;
