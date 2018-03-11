import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import TopicsContainer from './Topics';
import Footer from './Footer';



function App(props){
    return (
        <div>
            <Navbar />
                <Switch>
                    <Route exact path="/" component={TopicsContainer} />
                    <Route path="/about" component={About} />
                </Switch>
            <Footer />
        </div>
    )
}



export default App;
