import React from 'react';
import {Switch, Route} from 'react-router-dom';
import DisplayContainer from './Components/DisplayContainer';
import AuthFormContainer from './Components/Authorize';
import Profile from './Components/Profile';



function App(props){
    return (
        <div>
            <Switch>
                <Route exact path="/" component={DisplayContainer}/>
                <Route path="/login" component={AuthFormContainer}/>
                <Route path="/profile" component={Profile}/>
            </Switch>
        </div>
    )
}

export default App;
