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

    render(){
        if(!this.state.isLocked && !this.state.hasSaved){
            this.rollsShouldEnd();
        }
        const selected = {
            backgroundColor: this.state.isLocked ? "#1c2c3a" : "#EAE7DC",
            color: this.state.isLocked ? 'white' : "darkslategrey",
        }
        {/*other style is in css .dieContainer div */}

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

export default connect(state=>state, {})(Die);
