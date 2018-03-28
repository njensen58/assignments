import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AuthFormContainer from './Components/Authorize';
import Navbar from './Components/Navbar';


function App(props){
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={AuthFormContainer} />
            </Switch>
        </div>
    )
}

export default App;
