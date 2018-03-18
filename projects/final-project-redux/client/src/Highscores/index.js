import React from 'react';
import Highscore from './Highscore';
import { connect } from 'react-redux';
import { getHigh } from '../redux/highscores';

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
                <Highscore
                    key={score._id}
                    name={score.name}
                    score={score.score}
                />
            )
        })
        return (
            <div className="highscoreContainer">
                {mappedScores}
            </div>
        )
    }
}

export default connect(state=>state, { getHigh })(Highscores);
