import React from 'react';
import ListItem from './ListItem';
import axios from 'axios';

class HitListContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            people: []
        }
    }
    componentDidMount(){
        axios.get('http://api.vschool.io:6543/hitlist.json').then(response => {
            console.dir(response.data)
            this.setState({
                people: response.data
            })
        })
            console.log(this.state.people)
    }
    render(){
        const mappedHitList = this.state.people.map((person, i) => {
            return (
                <ListItem
                    key={person.name + i}
                    name={person.name}
                    image={person.image}
                />
            )
        })
        return (
            <div>
                { mappedHitList }
            </div>
        )
    }
}

export default HitListContainer;
