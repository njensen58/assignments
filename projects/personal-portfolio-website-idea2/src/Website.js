import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './Home';
import Navbar from './Navbar';
import MyProjects from './MyProjects';
import Footer from './Footer';


class Website extends React.Component {
    constructor(){
        super();
        this.state = {
            nav: false
        }
        this.handleNavExpand = this.handleNavExpand.bind(this)
    }

    handleNavExpand(){
        this.setState(prevState => ({
            nav: prevState.nav ? false : true
        }))
    }

    render(){
        return (
            <div className="appContainer">
                <Navbar
                    handleNavExpand={this.handleNavExpand}
                    info={this.state}
                />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/myprojects" component={MyProjects}/>
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Website;
