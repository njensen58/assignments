import React from 'react';

class Twos extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return (
                <div className="tableValueContainer">
                    <div>
                        Twos

                        {this.props.currentNums}
                    </div>
                </div>
            )
    }
}

export default Twos;
