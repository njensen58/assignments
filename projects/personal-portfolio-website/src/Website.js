import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './Home';
import Navbar from './Navbar';
import MyProjects from './MyProjects';
import About from './About';
import Footer from './Footer';


class Website extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/myprojects" component={MyProjects}/>
                    <Route path="/about" component={About}/>
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Website;
