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
                <div>
                    <h3>Choose Default News Source</h3>
                    <select>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default connect(state=>state.user, {})(Profile);
