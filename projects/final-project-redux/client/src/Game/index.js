import React from 'react';
import Scorecard from './Scorecard';
import Diceboard from './Diceboard';
import { connect } from 'react-redux';

class Game extends React.Component {
    constructor(){
        super();
        this.state = {
            currentNums: [],
            isGameComplete: false
        }
        this.updateCurrentNums = this.updateCurrentNums.bind(this);
        this.resetCurrentNums = this.resetCurrentNums.bind(this);
        this.gameover = this.gameover.bind(this);
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

    gameover(){
        const gameControl = this.props.gamecontrol;
        let count = 0;
        for(let key in gameControl){
            if(gameControl[key]){
                count++
            }
        }
        if(count === 13){
            this.setState({
                isGameComplete: true
            })
        }

    }

    render(){
        if(this.state.isGameComplete === false){
            this.gameover();
        }

        return (
            <div className="gameContainer">
            { this.state.isGameComplete ?
                <div className="gameComplete">
                    YAAAY you won!
                </div>
            :
                <div className="gameInProgress">
                    <Scorecard
                        currentNums={this.state.currentNums}
                        resetCurrentNums={this.resetCurrentNums}
                    />
                    <Diceboard
                        updateCurrentNums={this.updateCurrentNums}
                    />
                </div>
            }
            </div>
        )
    }
}

export default connect(state=>state, {})(Game);
