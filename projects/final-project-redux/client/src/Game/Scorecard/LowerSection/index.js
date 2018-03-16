import React from 'react';
import Section from './Section';
import { connect } from 'react-redux';
import { updateScorecard } from '../../../redux/scorecard';
import { isDoneSelecting } from '../../../redux/controls';




class LowerSection extends React.Component {
    constructor(){
        super();
        this.state = {
            threeOfAKind: 0,
            fourOfAKind: 0,
            fullHouse: 0,
            smallStraight: 0
        }
        this.calculate3OfAKind = this.calculate3OfAKind.bind(this);
        this.calculate4OfAKind = this.calculate4OfAKind.bind(this);
        this.calculateFullHouse = this.calculateFullHouse.bind(this);
        this.calculateSmallStraight = this.calculateSmallStraight.bind(this);
        this.updateScore = this.updateScore.bind(this);
    }


    calculate3OfAKind(){
        if(this.props.currentNums.length > 0){
            const value = this.props.currentNums
                .reduce((myObj, num) => {
                    myObj[num]+=1;
                    return myObj
                },{1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0})
            let threes = 0;
            for(let key in value){
                if(value[key] >= 3){
                    threes = key
                }
            }
            let finalNum = threes * 3;
            this.setState({
                threeOfAKind: finalNum
            })
        } else {
            this.setState({
                threeOfAKind: 0
            })
        }
    }


    calculate4OfAKind(){
        if(this.props.currentNums.length > 0){
            const value = this.props.currentNums
                .reduce((myObj, num) => {
                    myObj[num]+=1;
                    return myObj;
                },{1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0})
            let fours = 0;
            for(let key in value){
                if(value[key] >= 4){
                    fours = key
                }
            }
            let finalNum = fours * 4;
            this.setState({
                fourOfAKind: finalNum
            })
        } else {
            this.setState({
                fourOfAKind: 0
            })
        }
    }

    calculateFullHouse(){
        if(this.props.currentNums.length > 0){
            const value = this.props.currentNums
                .reduce((myObj, num) => {
                    myObj[num]+=1;
                    return myObj;
                },{1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0})
            let twos = 0;
            let threes = 0;
            for(let key in value){
                if(value[key] === 3){threes = key}
                if(value[key] === 2){twos = key}
            }
            if(threes > 0 && twos > 0){
                this.setState({
                    fullHouse: 25
                })
            }
        }
    }

    calculateSmallStraight(){
        if(this.props.currentNums.length > 0){
            const sorted = this.props.currentNums.sort((a, b) => a > b);
            let count = 0;
            let currentNum = sorted[0]
            for(let i = 1; i < sorted.length; i++){
                if(sorted[i + 1] === sorted[i] + 1 && sorted[i - 1] === sorted[i] - 1){
                    count++;
                    currentNum = sorted[i]
                }

            }
            if(count === 2){
                this.setState({
                    smallStraight: 30
                })
            }
        }
    }

    updateScore(value, section){
        this.props.updateScorecard(value, section)
        this.props.resetCurrentNums();
        this.props.isDoneSelecting();
    }

    render(){
        console.log(this.props)
        return (
            <div className="lowerSectionContainer">
                <div>
                    <span>3 Of A Kind</span>
                    <Section
                        section="threeOfAKind"
                        currentNums={this.props.currentNums}
                        calculateValue={this.calculate3OfAKind}
                        updateScore={this.updateScore}
                        value={this.state.threeOfAKind}
                        confirmedValue={this.props.scorecard.threeOfAKind}
                    />
                </div>
                <div>
                    <span>4 Of A Kind</span>
                    <Section
                        section="fourOfAKind"
                        currentNums={this.props.currentNums}
                        calculateValue={this.calculate4OfAKind}
                        updateScore={this.updateScore}
                        value={this.state.fourOfAKind}
                        confirmedValue={this.props.scorecard.fourOfAKind}
                    />
                </div>
                <div>
                    <span>Full House</span>
                    <Section
                        section="fullHouse"
                        currentNums={this.props.currentNums}
                        calculateValue={this.calculateFullHouse}
                        updateScore={this.updateScore}
                        value={this.state.fullHouse}
                        confirmedValue={this.props.scorecard.fullHouse}
                    />
                </div>
                <div>
                    <span>Small Straight</span>
                    <Section
                        section="smallStraight"
                        currentNums={this.props.currentNums}
                        calculateValue={this.calculateSmallStraight}
                        updateScore={this.updateScore}
                        value={this.state.smallStraight}
                        confirmedValue={this.props.scorecard.smallStraight}
                    />
                </div>
            </div>
        )
    }
}

export default connect(state=>state, { updateScorecard, isDoneSelecting })(LowerSection);
