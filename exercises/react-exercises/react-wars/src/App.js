import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import axios from 'axios';
import CurrentSelect from './CurrentSelect'


class App extends React.Component {
    constructor(){
        super();
        this.state = {
            names: []
        }
    }


    componentDidMount(){
        axios.get('https://swapi.co/api/people/').then(response => {
                this.setState({
                    names: response.data.results
                })
            })
    }


    render(){
        const mappedLinks = this.state.names.map(person => {
            return <Link to={`${this.props.match.url}/${itemID}`} key={person.name}>{person.name}</Link>
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
                    <Switch>
                        <Route path={`${this.props.match.url}/:itemID`} component={CurrentSelect}/>
                    </Switch>
                </div>
            </div>
        )
    }
}


export default App;
