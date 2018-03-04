import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HeaderNav from './HeaderNav';
import WelcomePage from './WelcomePage';
import Game from './Game';
import About from './About';
import Footer from './Footer';


function App(props){
    return (
        <div className="appContainer">
            <div>
                <HeaderNav />
            </div>
                <Switch>
                    <Route exact path="/" component={WelcomePage}/>
                    <Route path="/game" component={Game}/>
                    <Route path="/about" component={About}/>
                </Switch>
            <Footer />
        </div>
    )
}

export default App;
