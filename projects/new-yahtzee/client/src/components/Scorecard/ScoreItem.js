import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { validatePoints, updateScorecard, updateScoreSelect } from '../../redux/scorecard'
import { saveUserStats } from '../../redux/stats'
import { checkGameOver } from '../../redux/gamecontrols'
import { resetDie } from '../../redux/dicebox'


class ScoreItem extends Component { 
    // state toggle for point display //
    state = { 
        toggle: false,
    }

    // @: Toggle off open point windows
    componentWillReceiveProps(){
        if(!this.props.controls.allowPointSelection && this.state.toggle){
            this.setState({
                toggle: false
            })
        }
    }

    // @: Purpose: calculates current worth of selected score slot depending on the current die //
    // @: if statement is to disallow toggling if points saved && aleady toggled during Point selection phase 
    togglePoints = scoreType => {
        if(this.props.controls.allowPointSelection && (!this.state.toggle && !this.props.scorecard[scoreType].selected)){
            const { validatePoints, dice: { die1, die2, die3, die4, die5 }} = this.props
            const total = validatePoints([die1.value, die2.value, die3.value, die4.value, die5.value], scoreType)
            this.setState(prevState => ({ toggle: !prevState.toggle }))
            const updatedCard = {
                [scoreType]: { 
                    score: total.result,
                    selected: false 
                }
            }
            this.props.updateScoreSelect(this.props.user, updatedCard)
        }
   }

   // @: saves value to result of the toggle validatePoints as score value for the type, and sets the scoreType status to true //
    updateScore = scoreType => {
        if(this.props.controls.allowPointSelection){
            const { validatePoints, dice: { die1, die2, die3, die4, die5 }} = this.props
            const total = validatePoints([die1.value, die2.value, die3.value, die4.value, die5.value], scoreType)
            const updatedCard = {
                [scoreType]: { 
                    score: total.result, 
                    selected: true 
                }
            }
            // Update scorecard in db and reset dicebox && Check if game is over
            this.props.updateScorecard( this.props.user, updatedCard )
                    .then(() => {
                        this.props.checkGameOver( this.props.scorecard )
                        if(this.props.controls.gameOver){
                              // End game, save scorecard stats in stats model
                            this.props.saveUserStats( this.props.scorecard )
                              // Delete scorecard and generate new one for user
                              
                              // reset dice 
                            this.props.resetDie(this.props.user )
                              // Direct user to enter new score.
                            this.props.history.push( '/highscores' )
                        }
                    })
        }
        
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

        const { name, scoreType, scorecard } = this.props


        return (
            <div style={ devStyles.container } onClick={() => this.togglePoints(scoreType) }>

                <h2 style={ devStyles.title }>{ name }</h2>
                <div style={ devStyles.display }>

                    {/* If the user has toggled the points or if the scorecard section has a 
                        saved score entry, show the score currently saved in the db        */}

                {/* This is causing allselected items to show on new roll since it's saved in the db*/}

                    {   ( this.state.toggle || scorecard[scoreType].selected ) &&  
                            <React.Fragment>
                                <h3>{ scorecard[scoreType].score }</h3> 
                                { !scorecard[scoreType].selected && 
                                    <button onClick={() => this.updateScore( scoreType ) }>Click me</button> 
                                }
                            </React.Fragment>
                    }
                </div>
                
            </div>
        )
    }
}

export default withRouter(connect(state=>state, 
    { validatePoints, updateScorecard, resetDie, 
        updateScoreSelect, checkGameOver, saveUserStats })( ScoreItem )) 