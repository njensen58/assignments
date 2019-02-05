import React, { Component } from 'react'
import { connect } from 'react-redux';
import { roll, checkDieStatus } from '../../redux/dicebox'
import { gameControlToggler } from '../../redux/gamecontrols'
import Die from './Die'

const devStyles = {
    dicebox: {
        width: '100%', 
        height: "80px", 
        position: 'absolute', 
        bottom: '30px', 
        display: 'flex', 
        justifyContent: "space-around",
        backgroundColor: '#3339'
    },
    rollBtn: {
        padding: '20px',
        position: 'absolute',
        bottom: '120px'
    }
}


class Dicebox extends Component {

    submitRoll = () => {
        if(this.props.controls.allowRoll){
            const { dice } = this.props

            // Persist value of previously selected die while updating open die values //
            let die1, die2, die3, die4, die5;
            die1 = dice.die1.selected ? dice.die1 : { value: Math.floor(Math.random() *  1), selected: false }
            die2 = dice.die2.selected ? dice.die2 : { value: Math.floor(Math.random() *  1), selected: false }
            die3 = dice.die3.selected ? dice.die3 : { value: Math.floor(Math.random() *  1), selected: false }
            die4 = dice.die4.selected ? dice.die4 : { value: Math.floor(Math.random() *  1), selected: false }
            die5 = dice.die5.selected ? dice.die5 : { value: Math.floor(Math.random() *  1), selected: false }

            const newDicebox = {
                rollCount: this.props.dice.rollCount,
                die1,
                die2,
                die3,
                die4,
                die5
            }

            if(this.props.dice.rollCount < 3){
                newDicebox.rollCount += 1
            } 

            this.props.roll( this.props.user, newDicebox)
            this.props.gameControlToggler(newDicebox.rollCount)
        } 
    }

    render(){
        return(
            <div>
                <button style={ devStyles.rollBtn } onClick={ this.submitRoll }> Roll </button>
                <span>Roll: { this.props.dice.rollCount }/3</span>
                <div style={devStyles.dicebox}>
                    <Die die={this.props.dice.die1} name="die1"/>
                    <Die die={this.props.dice.die2} name="die2"/>
                    <Die die={this.props.dice.die3} name="die3"/>
                    <Die die={this.props.dice.die4} name="die4"/>
                    <Die die={this.props.dice.die5} name="die5"/>
                </div>
            </div>
        )
    }
}

export default connect(state=>state, { roll, checkDieStatus, gameControlToggler })(Dicebox)
