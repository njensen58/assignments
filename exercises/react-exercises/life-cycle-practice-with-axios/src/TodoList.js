import React from 'react';
import axios from 'axios';

class TodoList extends React.Component {
    constructor(){
        super();
        this.state = {
            people: []
        }
    }
    componentDidMount(){
        axios.get('https://swapi.co/api/people/').then(response => {
            console.dir(response.data)
            this.setState({
                people: response.data.results
            });
        })
    }

    render() {
        const mappedPeople = this.state.people.map(person => {
            return (
                <div key={person.birth_year + person.height}>
                    <p>{person.name}</p>
                    <p>{person.height}</p>
                </div>
                )
        })

        return (
            <div>
                <ul>
                    { mappedPeople }
                </ul>
            </div>
        )
    }
}

export default TodoList;
