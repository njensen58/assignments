import { createStore, combineReducers } from 'redux';
import entries from './entries';



const store = createStore(
    combineReducers({entries}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
