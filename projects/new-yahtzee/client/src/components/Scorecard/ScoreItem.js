import React, { Component } from 'react'
import { connect } from 'react-redux';
import { validatePoints } from '../../redux/scorecard'

class ScoreItem extends Component { 
    constructor(){
        super()
        this.state = {
            toggle: false,
            total: {
                result: "",
                type: ""
            }
        }
    }

    togglePoints = scoreType => {
        const { validatePoints, dice: { die1, die2, die3, die4, die5 }} = this.props
        const total = validatePoints([die1.value, die2.value, die3.value, die4.value, die5.value], scoreType)
        this.setState(prevState => ({
            total: total,
            toggle: !prevState.toggle
        }))
   }

    render(){
        const devStyles = {
            container: {
                fontSize: '12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid black'
            },
            title: {
                margin: '0',
                padding: '3px',
                fontSize: '13px'
            },
            display: {
                height: '100%',
                border: '1px solid black',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                height: '20px'
            }
        }

        const { name } = this.props

        return (
            <div style={ devStyles.container } onClick={() => this.togglePoints(this.props.scoreType) }>

                <h2 style={ devStyles.title }>{ name }</h2>
                <div style={ devStyles.display } >
                    { this.state.toggle && <h3>{ this.state.total.result }</h3> }
                </div>
                
            </div>
        )
    }
}

export default connect(state=>state, { validatePoints })( ScoreItem ) 