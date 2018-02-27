import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Footer from './Footer';


class App extends React.Component{
    render(){
        return (
            <div>
                <Navbar />
                <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/About" component={About}/>
                    <Route path="/Services" component={Services}/>
                </Switch>
                </div>
                <Footer />
            </div>
        )
    }
}


export default App;
