import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Game from './Game';
import Highscores from './Highscores';
import About from './About';
import Footer from './Footer';


function App(props){
    return (
        <div>
            <Navbar />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/game" component={Game}/>
                    <Route path="/highscores" component={Highscores}/>
                    <Route path="/about" component={About}/>
                </Switch>
            <Footer />
        </div>
    )
}

export default App;
