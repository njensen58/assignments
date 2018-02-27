import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import MyProjects from './MyProjects';


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
                <Header />
                <MyProjects />
            </div>
        )
    }
}

export default Website;
