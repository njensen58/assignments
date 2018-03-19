import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Game from './Game';
import Highscores from './Highscores';
import Footer from './Footer';


function App(props){
    return (
        <div>
            <Navbar />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/game" component={Game}/>
                    <Route path="/highscores" component={Highscores}/>
                </Switch>
            <Footer />
        </div>
    )
}

export default App;
