import React from 'react';
import Section from './Section';

class LowerSection extends React.Component {
    constructor(){
        super();
        this.state = {
            threeOfAKind: 0
        }
        this.calculate3OfAKind = this.calculate3OfAKind.bind(this);
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
            console.log(value[1])
            for(let key in value){
                if(value[key] >= 3){
                    threes = value.key
                }
            }
            console.log(threes)
        }
    }

    updateScore(value, section){

    }

    render(){
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
                    />
                </div>
            </div>
        )
    }
}

export default LowerSection;
