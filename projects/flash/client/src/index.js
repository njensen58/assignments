import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import './style.css'

store.subscribe(() => {
    console.log(store.getState())
})


ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <App />
        </Router>
    </Provider>,
document.getElementById('root'))
