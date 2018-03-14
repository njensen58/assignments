import React from 'react';

class Die extends React.Component {
    constructor(){
        super();
        this.state = {
            isLocked: false,
            lockedNum: 0,
            hasSaved: false
        }
        this.handleLock = this.handleLock.bind(this);
    }

    componentWillReceiveProps(){
            if(this.props.info.shouldReset){
                this.setState({
                    isLocked: false,
                    lockedNum: 0,
                    hasSaved: false
                })
            }
    }

    handleLock(){
        if(this.props.info.rollCount > 0){  /* To make sure numbers cannot be selected before populated */
            if(!this.state.isLocked){  /* Once a number is selected, it cannot be unselected */
                this.setState({
                    isLocked: true,
                    lockedNum: this.props.num
                })
            }
            if(!this.state.hasSaved){ /* Once a number is selected, it cannot be unselected */
                this.props.handleSaveNumChoice(this.props.num);
                this.setState({
                    hasSaved: true
                })
            }
        }
    }

    render(){
        const selected = {
            backgroundColor: this.state.isLocked ? "cornflowerblue" : "white",
            width: "50px",
            height: "50px",
            border: "1px solid black",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "5px",
            fontSize: "20px"
        }

        return (

                <div style={selected} onClick={this.handleLock} >

                    { this.state.isLocked ?
                        this.state.lockedNum
                    :
                        this.props.num
                    }

                </div>
        )
    }
}

export default Die;
