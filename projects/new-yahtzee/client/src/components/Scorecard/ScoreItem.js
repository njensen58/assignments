import React, { Component } from 'react'
import { connect } from 'react-redux';
import { validatePoints, updateScorecard } from '../../redux/scorecard'

class ScoreItem extends Component { 
    constructor(props){
        super(props)
        this.state = {
            toggle: props.scorecard[this.props.scoreType].selected || false,
            total: {
                result: "",
                type: ""
            }
        }
    }

    componentDidMount = () => {
        this.setState({
            toggle: this.props.scorecard[this.props.scoreType].selected,
            total: {
                result: this.props.scorecard[this.props.scoreType].selected 
                            ? this.props.scorecard[this.props.scoreType].score
                            : 0,
                type: ""
            }
        })
    }

    // calculates current worth of selected score slot depending on the current die
    togglePoints = scoreType => {
        const { validatePoints, dice: { die1, die2, die3, die4, die5 }} = this.props
        const total = validatePoints([die1.value, die2.value, die3.value, die4.value, die5.value], scoreType)
        this.setState(prevState => ({
            total: total,
            toggle: !prevState.toggle
        }))
   }

   // saves value to result of the toggle validatePoints as score value for the type, and sets the scoreType status to true
   updateScore = scoreType => {
        const updatedCard = {
            toggle: this.state.toggle,
            [scoreType]: { 
                score: this.state.total.result, 
                selected: true 
            }
        }
        this.props.updateScorecard(this.props.user, updatedCard)
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
                border: '1px solid black',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                height: '20px'
            }
        }

        const { name, scoreType } = this.props
       
        return (
            <div style={ devStyles.container } onClick={() => this.togglePoints(scoreType) }>

                <h2 style={ devStyles.title }>{ name }</h2>
                <div style={ devStyles.display } >
                    {   this.state.toggle && 
                            <React.Fragment>
                                <h3>{ this.state.total.result }</h3> 
                                <button onClick={() => this.updateScore( scoreType ) }>Click me</button>
                            </React.Fragment>
                    }
                </div>
                
            </div>
        )
    }
}

export default connect(state=>state, { validatePoints, updateScorecard })( ScoreItem ) 