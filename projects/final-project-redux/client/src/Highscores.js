import React from 'react';
import { connect } from 'react-redux';
import { getHigh } from './redux/highscores';

class Highscores extends React.Component {
    constructor(){
        super();
        this.state = {
            highscores: []
        }
    }

    componentDidMount(){
        this.props.getHigh().then(() => {
            this.setState({
                highscores: this.props.highscores.highscores
            })
        })
    }

    render(){
        const mappedScores = this.state.highscores.map(score => {
            return (
                <div>
                    <h1>{score.name}</h1>
                    <h3>{score.score}</h3>
                </div>
            )
        })
        return (
            <div>
                {mappedScores}
            </div>
        )
    }
}

export default connect(state=>state, { getHigh })(Highscores);
