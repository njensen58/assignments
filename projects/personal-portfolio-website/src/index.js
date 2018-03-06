import React from 'react';
import ReactDOM from 'react-dom';
import Website from './Website';
import {BrowserRouter as Router} from 'react-router-dom';
import './style.css';


ReactDOM.render(
    <Router>
        <Website />
    </Router>,
document.getElementById('root'))
