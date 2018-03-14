import React from 'react';

let expectedValue = '';

class Ones extends React.Component{
    constructor(){
        super();
        this.state = {
            expectedValue: 0
        }
        this.calculateValue = this.calculateValue.bind(this);
    }

    calculateValue(){
        expectedValue = this.props.currentNums.reduce((total, num) => num === 1 ? total += 1 : total)
    }

    render(){
        console.log(expectedValue)
        return (
            <div className="tableValueContainer" onClick={this.calculateValue}>
                <div>
                    Ones
                    {expectedValue}
                </div>
            </div>
        )
    }
}

export default Ones;
