import React from 'react';
import UpperSection from './UpperSection';
import LowerSection from './LowerSection';
import GameRules from './GameRules';

class Scorecard extends React.Component {
    constructor(){
        super();
        this.state = {
            isLearning: false
        }
        this.toggleIsLearning = this.toggleIsLearning.bind(this);
    }

    toggleIsLearning(){
        this.setState(prevState => ({
            isLearning: !prevState.isLearning ? true : false
        }))
    }

    render(){
        const howToPlay = {
            display: this.state.isLearning ? 'flex' : 'none',
            position: 'absolute',
            gridRow: '1',
            width: '100%',
            flexDirection: 'column',
            backgroundColor: 'rgba(4, 3, 3, 0.83)',
            zIndex: '1',
            overflowY: 'scroll'
        }

        const howToPlayIcon = {
            position: 'absolute',
            gridRow: '1',
            right: '0',
            marginRight: '10px'
        }

        return (
            <div className="scorecardContainer">
                <div style={howToPlayIcon} onClick={this.toggleIsLearning}>
                    <span><i className="ion-help-circled questionIcon"></i></span>
                </div>
                <div style={howToPlay} onClick={this.toggleIsLearning}>
                    <GameRules />
                </div>
                <div className="upperSectionDiv">
                    <UpperSection
                        currentNums={this.props.currentNums}
                        resetCurrentNums={this.props.resetCurrentNums}
                    />
                </div>
                <div className="lowerSectionDiv">
                    <LowerSection
                        currentNums={this.props.currentNums}
                        resetCurrentNums={this.props.resetCurrentNums}
                    />
                </div>
                <div className="yahtzeeTitleDiv">
                    <h1>YAHTZEE</h1>
                </div>
                <div className="totalScoreDiv">
                    <div>
                        <h3>Total Score</h3>
                    </div>
                    <div><span>{this.props.totalGameScore}</span></div>
                </div>
            </div>
        )
    }
}

export default Scorecard;
