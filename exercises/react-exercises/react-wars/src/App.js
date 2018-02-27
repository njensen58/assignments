import React from 'react';
import {Route, Link} from 'react-router-dom';
import axios from 'axios';
import CharacterDisplay from './CharacterDisplay';


class App extends React.Component {
    constructor(){
        super();
        this.state = {
            names: []
        }
    }

    componentDidMount(){
        axios.get('https://swapi.co/api/people/').then(response => {
                console.log(response.data.results);
                this.setState({
                    names: response.data.results
                })
            })
    }

    render(){
        const mappedLinks = this.state.names.map(person => {
            return <Link to="https://swapi.co/api/people/" key={person.name}>{person.name}</Link>
        })


        return (
            <div className="appContainer">
                <div className="headerContainer">
                    <h1>Star Wars Characters</h1>
                </div>
                <div className="linksContainer">
                    <h2>Characters</h2>
                    {mappedLinks}
                </div>
                <div className="displayContainer">

                </div>
            </div>
        )
    }
}

export default App;
