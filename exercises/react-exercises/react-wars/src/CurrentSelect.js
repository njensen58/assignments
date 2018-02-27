import React from 'react';
import axios from 'axios';

class CurrentSelect extends React.Component {
    constructor(){
        super();
        this.state = {
            person: {}
        }
    }

    componentDidMount(){
        axios.get(`https://swapi.co/api/people/${this.props.match.params.itemID}`).then(response => {
            this.setState({
                person: response.person
            })
        })
    }

    render(){
        return (
            <div>
            {console.log(this.state.person)}
                hi
            </div>
        )
    }
}

export default CurrentSelect;
