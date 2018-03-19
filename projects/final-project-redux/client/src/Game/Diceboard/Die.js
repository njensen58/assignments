import React from 'react';
import { connect } from 'react-redux';

class Die extends React.Component {
    constructor(){
        super();
        this.state = {
            isLocked: false,
            lockedNum: 0,
            hasSaved: false
        }
        this.handleLock = this.handleLock.bind(this);
        this.rollsShouldEnd = this.rollsShouldEnd.bind(this);
        this.handleDiceImages = this.handleDiceImages.bind(this);
    }

    componentWillReceiveProps(){
            if(this.props.controls.shouldReset){
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

    rollsShouldEnd(){
        if(this.props.info.rollCount === 3){
            this.setState({
                lockedNum: this.props.num,
                hasSaved: true,
                isLocked: true
            }, ()=>{
                this.props.handleSaveNumChoice(this.props.num);
            })
        }

    }


    handleDiceImages(){
        if(this.state.isLocked){
            if(this.state.lockedNum === 1){
                return require('../../resources/imgs/Dice1.svg');
            } else if(this.state.lockedNum === 2){
                return require('../../resources/imgs/Dice2.svg');
            } else if(this.state.lockedNum === 3){
                return require('../../resources/imgs/Dice3.svg');
            } else if(this.state.lockedNum === 4){
                return require('../../resources/imgs/Dice4.svg');
            } else if(this.state.lockedNum === 5){
                return require('../../resources/imgs/Dice5.svg');
            } else if(this.state.lockedNum === 6){
                return require('../../resources/imgs/Dice6.svg');
        }
    }
        if(!this.state.isLocked){
            if(this.props.num === 1){
                return require('../../resources/imgs/Dice1.svg');
            } else if(this.props.num === 2){
                return require('../../resources/imgs/Dice2.svg');
            } else if(this.props.num === 3){
                return require('../../resources/imgs/Dice3.svg');
            } else if(this.props.num === 4){
                return require('../../resources/imgs/Dice4.svg');
            } else if(this.props.num === 5){
                return require('../../resources/imgs/Dice5.svg');
            } else if(this.props.num === 6){
                return require('../../resources/imgs/Dice6.svg');
            }
        }
    }

    render(){
        if(!this.state.isLocked && !this.state.hasSaved){
            this.rollsShouldEnd();
        }
        const selected = {
            backgroundImage: 'url(' + this.handleDiceImages() + ')',
            color: this.state.isLocked ? 'white' : "darkslategrey",
            backgroundSize: 'contain',
        
            backgroundColor: this.state.isLocked ? '#A8D0E6' : 'white'

        }
        {/*other style is in css .dieContainer div */}

        return (

                <div style={selected} onClick={this.handleLock} >

                </div>
        )
    }
}

export default connect(state=>state, {})(Die);
