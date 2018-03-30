import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


import user from './Auth';
import news from './News';



const rootReducer = combineReducers({
    user,
    news
})


export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)
