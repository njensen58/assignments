import React from 'react';
import Scorecard from './Scorecard';
import Diceboard from './Diceboard';
import { connect } from 'react-redux';

class Game extends React.Component {
    constructor(){
        super();
        this.state = {
            currentNums: []
        }
        this.updateCurrentNums = this.updateCurrentNums.bind(this);
        this.resetCurrentNums = this.resetCurrentNums.bind(this);
    }

    updateCurrentNums(nums){
        this.setState({
            currentNums: [...nums]
        })
    }

    resetCurrentNums(){
        this.setState({
            currentNums: []
        })
    }

    render(){
        return (
            <div className="gameContainer">
                <Scorecard
                    currentNums={this.state.currentNums}
                    resetCurrentNums={this.resetCurrentNums}
                />
                <Diceboard
                    updateCurrentNums={this.updateCurrentNums}
                />
            </div>
        )
    }
}

export default connect(state=>state, {})(Game);
