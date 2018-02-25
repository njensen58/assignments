import React from 'react';
import axios from 'axios';


class App extends React.Component {
    constructor(){
        super();
        this.state = {
            color: ''
        }
    }

    componentDidMount(){
        axios.get('http://www.colr.org/json/color/random').then(response => {
            console.dir(response.data.new_color);
            this.setState({
                color: response.data.new_color,
            })
        })
    }

    render(){

    const boxDiv = {
        backgroundColor: '#' + this.state.color,
        height: '200px',
        width: '400px',
        fontFamily: 'sans-serif',
        fontSize: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    }

        return (
            <div style={boxDiv}>
                Hello World
            </div>
        )
    }
}

export default App;
