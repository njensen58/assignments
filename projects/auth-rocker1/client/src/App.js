import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import TopicsContainer from './Topics';
import Footer from './Footer';
import Login from './Login';
import Signup from './Signup';



function App(props){
    return (
        <div>
            <Navbar />
                <Switch>

                    <Route exact path="/" component={Signup} />
                    <Route path="/topics" component={TopicsContainer} />
                    <Route path="/login" component={Login} />
                    <Route path="/about" component={About} />
                </Switch>
            <Footer />
        </div>
    )
}



export default App;
