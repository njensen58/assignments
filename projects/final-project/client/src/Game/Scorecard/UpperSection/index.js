import React from 'react';
import Section from './Section';


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
    }

    calculateOnesValue(){
        if(this.props.currentNums.length > 0){
            const value = this.props.currentNums.reduce((final, num) => num === 1 ? final += 1 : final, 0)
            this.setState({
                onesValue: value
            })
        }
    }

    calculateTwosValue(){
        if(this.props.currentNums.length > 0){
            const value = this.props.currentNums.reduce((final, num) => num === 2 ? final += 2 : final, 0)
            this.setState({
                twosValue: value
            })
        }
    }

    calculateThreesValue(){
        if(this.props.currentNums.length > 0){
            const value = this.props.currentNums.reduce((final, num) => num === 3 ? final += 3 : final, 0)
            this.setState({
                threesValue: value
            })
        }
    }

    calculateFoursValue(){
        if(this.props.currentNums.length > 0){
            const value = this.props.currentNums.reduce((final, num) => num === 4 ? final += 4 : final, 0)
            this.setState({
                foursValue: value
            })
        }
    }

    calculateFivesValue(){
        if(this.props.currentNums.length > 0){
            const value = this.props.currentNums.reduce((final, num) => num === 5 ? final += 5 : final, 0)
            this.setState({
                fivesValue: value
            })
        }
    }

    calculateSixesValue(){
        if(this.props.currentNums.length > 0){
            const value = this.props.currentNums.reduce((final, num) => num === 6 ? final += 6 : final, 0)
            this.setState({
                sixesValue: value
            })
        }
    }

    render(){
        return (
            <div className="upperSectionContainer">
                <div>
                    <span>1's</span>
                    <Section currentNums={this.props.currentNums} calculateValue={this.calculateOnesValue} value={this.state.onesValue}/>
                </div>
                <div>
                    <span>2's</span>
                    <Section currentNums={this.props.currentNums} calculateValue={this.calculateTwosValue} value={this.state.twosValue}/>
                </div>
                <div>
                    <span>3's</span>
                    <Section currentNums={this.props.currentNums} calculateValue={this.calculateThreesValue} value={this.state.threesValue}/>
                </div>
                <div>
                    <span>4's</span>
                    <Section currentNums={this.props.currentNums} calculateValue={this.calculateFoursValue} value={this.state.foursValue}/>
                </div>
                <div>
                    <span>5's</span>
                    <Section currentNums={this.props.currentNums} calculateValue={this.calculateFivesValue} value={this.state.fivesValue}/>
                </div>
                <div>
                    <span>6's</span>
                    <Section currentNums={this.props.currentNums} calculateValue={this.calculateSixesValue} value={this.state.sixesValue}/>
                </div>
            </div>
        )
    }
}

export default UpperSection;
