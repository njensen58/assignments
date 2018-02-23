import React from 'react';
import Form from './Form';

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: 0,
            gender: {},
            fruits: [{
                apples: '',
                oranges: '',
                bananas: ''
            }]
        }
    this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render(){
        return (
            <div>
                <Form
                    value={[...this.state]}
                    handleChange={this.handleChange}
                />
            </div>
        )
    }
}

export default App;
