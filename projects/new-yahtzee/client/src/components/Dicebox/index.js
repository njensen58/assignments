import React, { Component } from 'react'
import { connect } from 'react-redux';
import { roll, checkDieStatus } from '../../redux/dicebox'
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
    die: {
        border: '1px solid black',
        borderRadius: "3px",
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rollBtn: {
        padding: '20px',
        position: 'absolute',
        bottom: '120px'
    }
}


class Dicebox extends Component {
    constructor(){
        super()
        this.state = {
            die1: '',
            die2: '',
            die3: '',
            die4: '',
            die5: ''
        }
    }

    componentDidMount(){
        this.props.checkDieStatus( this.props.user )
        this.setDiceState()
    }

    setDiceState = () => {
        this.setState({
            die1: this.props.dice.die1,
            die2: this.props.dice.die2,
            die3: this.props.dice.die3,
            die4: this.props.dice.die4,
            die5: this.props.dice.die5
        })
    }

    submitRoll = () => {
        const { dice } = this.props
        const newDicebox = {
            rollCount: 0
        }
        let die1, die2, die3, die4, die5;
        die1 = dice.die1.selected ? dice.die1.value : Math.floor(Math.random() * 6 + 1)
        die2 = dice.die2.selected ? dice.die2.value : Math.floor(Math.random() * 6 + 1)
        die3 = dice.die3.selected ? dice.die3.value : Math.floor(Math.random() * 6 + 1)
        die4 = dice.die4.selected ? dice.die4.value : Math.floor(Math.random() * 6 + 1)
        die5 = dice.die5.selected ? dice.die5.value : Math.floor(Math.random() * 6 + 1)

        if(this.props.dice.rollCount !== 3){
            newDicebox.rollCount = this.props.dice.rollCount += 1
        } else {
            newDicebox.rollCount = 0
        }
        this.props.roll( this.props.user, newDicebox).then(() => this.setDiceState())
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <button style={ devStyles.rollBtn } onClick={ this.submitRoll }> Roll </button>
                <div style={devStyles.dicebox}>
                    <Die devStyles={ devStyles } die={this.state.die1}/>
                    <Die devStyles={ devStyles } die={this.state.die2}/>
                    <Die devStyles={ devStyles } die={this.state.die3}/>
                    <Die devStyles={ devStyles } die={this.state.die4}/>
                    <Die devStyles={ devStyles } die={this.state.die5}/>
                </div>
            </div>
        )
    }
}

export default connect(state=>state, { roll, checkDieStatus })(Dicebox)
