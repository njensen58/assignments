import React from 'react';
import {connect} from 'react-redux';



class Profile extends React.Component{
    constructor(){
        super();
        this.state = {

        }
        this.goToHome = this.goToHome.bind(this);
    }

    goToHome(){
        this.props.history.push('/');
    }

    render(){
        return (
            <div>
                <div>
                    <button onClick={this.goToHome}>Home</button>
                </div>
                Hello {this.props.username}!
            </div>
        )
    }
}

export default connect(state=>state.user, {})(Profile);
