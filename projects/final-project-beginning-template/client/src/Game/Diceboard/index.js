import React from 'react';
import Die from './Die';

class Diceboard extends React.Component {
    constructor(){
        super();
        this.state = {
            currentRoll: [],
            rollCount: 0,
            savedDie: [],
            shouldReset: false
        }
        this.handleRoll = this.handleRoll.bind(this);
        this.handleSaveNumChoice = this.handleSaveNumChoice.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleRoll(){
        if(this.state.rollCount <= 3){
            let dice1 = Math.floor(Math.random() * 6 + 1)
            let dice2 = Math.floor(Math.random() * 6 + 1)
            let dice3 = Math.floor(Math.random() * 6 + 1)
            let dice4 = Math.floor(Math.random() * 6 + 1)
            let dice5 = Math.floor(Math.random() * 6 + 1)
            this.setState(prevState => ({
                currentRoll: [dice1, dice2, dice3, dice4, dice5],
                rollCount: prevState.rollCount + 1,
                shouldReset: false
            }))
        }
    }

    handleSaveNumChoice(num){
        this.setState(prevState => ({
            savedDie: [...prevState.savedDie, num]
        }))
    }

    handleReset(){
        if(this.state.savedDie.length === 5){
            this.props.updateCurrentNums(this.state.savedDie)
            this.setState({
                shouldReset: true,
                rollCount: 0,
                savedDie: [],
                currentRoll: []
            })
        } else {
            alert('You must select all numbers')
        }
    }

    render(){
        return (
            <div className="diceboardContainer">
                <Die num={this.state.currentRoll[0]} info={this.state} handleSaveNumChoice={this.handleSaveNumChoice}/>
                <Die num={this.state.currentRoll[1]} info={this.state} handleSaveNumChoice={this.handleSaveNumChoice}/>
                <Die num={this.state.currentRoll[2]} info={this.state} handleSaveNumChoice={this.handleSaveNumChoice}/>
                <Die num={this.state.currentRoll[3]} info={this.state} handleSaveNumChoice={this.handleSaveNumChoice}/>
                <Die num={this.state.currentRoll[4]} info={this.state} handleSaveNumChoice={this.handleSaveNumChoice}/>
                { this.state.rollCount !== 3 ?
                <div>
                    <button onClick={this.handleRoll}>
                        { this.state.rollCount < 1 ?
                            <span>New roll</span>
                        :
                            <span>Roll</span>
                        }
                    </button>
                </div>
                :
                    <button onClick={this.handleReset}>
                        <span>Submit Numbers</span>
                    </button>
                }
            </div>
        )
    }
}

export default Diceboard;
