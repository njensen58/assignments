import React from 'react';
import Section from './Section';
import { connect } from 'react-redux';
import { updateScorecard } from '../../../redux/scorecard';
import { isDoneSelecting } from '../../../redux/controls';


class UpperSection extends React.Component{
    constructor(){
        super();
        this.state = {
            onesValue: 0,
            twosValue: 0,
            threesValue: 0,
            foursValue: 0,
            fivesValue: 0,
            sixesValue: 0
        }
        this.calculateOnesValue = this.calculateOnesValue.bind(this)
        this.calculateTwosValue = this.calculateTwosValue.bind(this)
        this.calculateThreesValue = this.calculateThreesValue.bind(this)
        this.calculateFoursValue = this.calculateFoursValue.bind(this)
        this.calculateFivesValue = this.calculateFivesValue.bind(this)
        this.calculateSixesValue = this.calculateSixesValue.bind(this)
        this.updateScore = this.updateScore.bind(this);
    }

    componentWillReceiveProps(){
        if(this.props.controls.shouldReset){
            this.setState({
                onesValue: 0,
                twosValue: 0,
                threesValue: 0,
                foursValue: 0,
                fivesValue: 0,
                sixesValue: 0
            })
        }
    }

    calculateOnesValue(){
        if(this.props.currentNums.length > 0){
            const value = this.props.currentNums.reduce((final, num) => num === 1 ? final += 1 : final, 0)
            this.setState({
                onesValue: value
            })
        } else {
            this.setState({
                onesValue: 0
            })
        }
    }

    calculateTwosValue(){
        if(this.props.currentNums.length > 0){
            const value = this.props.currentNums.reduce((final, num) => num === 2 ? final += 2 : final, 0)
            this.setState({
                twosValue: value
            })
        } else {
            this.setState({
                twosValue: 0
            })
        }
    }

    calculateThreesValue(){
        if(this.props.currentNums.length > 0){
            const value = this.props.currentNums.reduce((final, num) => num === 3 ? final += 3 : final, 0)
            this.setState({
                threesValue: value
            })
        } else {
            this.setState({
                threesValue: 0
            })
        }
    }

    calculateFoursValue(){
        if(this.props.currentNums.length > 0){
            const value = this.props.currentNums.reduce((final, num) => num === 4 ? final += 4 : final, 0)
            this.setState({
                foursValue: value
            })
        } else {
            this.setState({
                foursValue: 0
            })
        }
    }

    calculateFivesValue(){
        if(this.props.currentNums.length > 0){
            const value = this.props.currentNums.reduce((final, num) => num === 5 ? final += 5 : final, 0)
            this.setState({
                fivesValue: value
            })
        } else {
            this.setState({
                fivesValue: 0
            })
        }
    }

    calculateSixesValue(){
        if(this.props.currentNums.length > 0){
            const value = this.props.currentNums.reduce((final, num) => num === 6 ? final += 6 : final, 0)
            this.setState({
                sixesValue: value
            })
        } else {
            this.setState({
                sixesValue: 0
            })
        }
    }

    updateScore(value, section){
        this.props.updateScorecard(value, section)
        this.props.resetCurrentNums();
        this.props.isDoneSelecting();
    }

    render(){
        const totalDisplay = {
            width: '50px',
            height: '50px',
            border: '1px solid black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '3px',
            margin: '2px',
        }

        const score = this.props.scorecard;
        const totalScore = score.ones + score.twos + score.threes + score.fours + score.fives + score.sixes;

        return (
            <div className="upperSectionContainer">
                <div>
                    <span>1's</span>
                    <Section
                        section="ones"
                        currentNums={this.props.currentNums}
                        calculateValue={this.calculateOnesValue}
                        value={this.state.onesValue}
                        updateScore={this.updateScore}
                        confirmedValue={this.props.scorecard.ones}
                    />
                </div>
                <div>
                    <span>2's</span>
                    <Section
                        section="twos"
                        currentNums={this.props.currentNums}
                        calculateValue={this.calculateTwosValue}
                        value={this.state.twosValue}
                        updateScore={this.updateScore}
                        confirmedValue={this.props.scorecard.twos}
                    />
                </div>
                <div>
                    <span>3's</span>
                    <Section
                        section="threes"
                        currentNums={this.props.currentNums}
                        calculateValue={this.calculateThreesValue}
                        value={this.state.threesValue}
                        updateScore={this.updateScore}
                        confirmedValue={this.props.scorecard.threes}
                    />
                </div>
                <div>
                    <span>4's</span>
                    <Section
                        section="fours"
                        currentNums={this.props.currentNums}
                        calculateValue={this.calculateFoursValue}
                        value={this.state.foursValue}
                        updateScore={this.updateScore}
                        confirmedValue={this.props.scorecard.fours}
                    />
                </div>
                <div>
                    <span>5's</span>
                    <Section
                        section="fives"
                        currentNums={this.props.currentNums}
                        calculateValue={this.calculateFivesValue}
                        value={this.state.fivesValue}
                        updateScore={this.updateScore}
                        confirmedValue={this.props.scorecard.fives}
                    />
                </div>
                <div>
                    <span>6's</span>
                    <Section
                        section="sixes"
                        currentNums={this.props.currentNums}
                        calculateValue={this.calculateSixesValue}
                        value={this.state.sixesValue}
                        updateScore={this.updateScore}
                        confirmedValue={this.props.scorecard.sixes}
                    />
                </div>
                <div>
                    <span>BONUS</span>
                    <div>
                        { totalScore >= 63 ?
                            <div style={totalDisplay}>
                                +35
                            </div>
                        :
                            <div style={totalDisplay}>
                                {/*Nothing*/}
                            </div>
                        }
                    </div>
                </div>
                <div>
                    <span>Total Score</span>
                    <div>
                    { totalScore >= 63 ?
                        <div style={totalDisplay}>
                            {totalScore + 35}
                        </div>
                    :
                        <div style={totalDisplay}>
                            {totalScore}
                        </div>
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state=>state, { updateScorecard, isDoneSelecting })(UpperSection);
