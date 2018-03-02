import React from 'react';
import { connect } from 'react-redux';
import { addThing } from './redux';
import HeaderForm from './HeaderForm';
import UglyThingsDisplay from './UglyThingsDisplay';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            title: '',
            imgUrl: '',
            description: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.addThing(this.state);
        this.setState({
            title: '',
            imgUrl: '',
            description: ''
        })
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return (
            <div>
                <div className="headerContainer">
                    <h1>Ugly Things</h1>
                    <h4>Add Your Own!</h4>
                    <HeaderForm
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                        info={this.state}
                    />
                </div>
                <div>
                    <UglyThingsDisplay
                        uglyThings={this.props.uglyThings}
                    />
                </div>
            </div>
        )
    }
}

export default connect(state=>state, { addThing })(App);
