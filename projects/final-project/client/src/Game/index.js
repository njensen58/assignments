import React from 'react';
import Scorecard from './Scorecard';
import Diceboard from './Diceboard';

class Game extends React.Component {
    constructor(){
        super();
        this.state = {
            currentNums: []
        }
        this.updateCurrentNums = this.updateCurrentNums.bind(this);
    }

    updateCurrentNums(nums){
        this.setState({
            currentNums: [...nums]
        })
    }

    render(){
        return (
            <div className="gameContainer">
                <Scorecard currentNums={this.state.currentNums}/>
                <Diceboard updateCurrentNums={this.updateCurrentNums}/>
            </div>
        )
    }
}

export default Game;
