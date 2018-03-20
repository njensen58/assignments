import React from 'react';

class Highscore extends React.Component {
    constructor(){
        super();
        this.state = {
            name: '',
            score: '',
            isEditing: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleEditToggle = this.handleEditToggle.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleEditToggle(){
        this.setState(prevState => ({
            isEditing: !prevState.isEditing ? true : false
        }))
    }

    render(){
        return (
            <div>
                <div>
                    {!this.state.isEditing ?
                        <button onClick={this.handleEditToggle}><i className="ion-toggle"></i></button>
                    :
                        <button onClick={this.handleEditToggle}><i className="ion-toggle-filled"></i></button>
                    }
                </div>
                <div>
                    {!this.state.isEditing ?
                        <h2>{this.props.name}</h2>
                    :
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name" />
                    }
                </div>
                <div>
                    {!this.state.isEditing ?
                        <h2>{this.props.score}</h2>
                    :
                        <input type="text" name="score" value={this.state.score} onChange={this.handleChange} placeholder="Score" />
                    }
                </div>
                <div>
                    {!this.state.isEditing ?
                        ''
                    :
                    <button><i className="ion-trash-b"></i></button>
                    }
                </div>
            </div>
        )
    }
}

export default Highscore
