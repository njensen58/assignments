import { createStore, combineReducers } from 'redux';
import movement from './gameMovement';

const rootReducer = combineReducers({
    movement
})

let store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


export default store;
