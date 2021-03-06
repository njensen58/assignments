import React from 'react';
import Navbar from './Navbar';
import { Route, Switch } from 'react-router-dom';

import Signup from './Signup';
import Login from './Login';
import TodoList from './Todos';
import Profile from './Profile';

function App(){
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Signup}/>
                <Route path="/login" component={Login}/>
                <Route path="/todos" component={TodoList}/>
                <Route path="/profile" component={Profile}/>
            </Switch>
        </div>
    )
}

export default App;
