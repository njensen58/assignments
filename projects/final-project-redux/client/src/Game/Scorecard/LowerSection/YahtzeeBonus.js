import React from 'react';
import { connect } from 'react-redux';
import { disallowSelection } from '../../../redux/controls'
import { isDoneSelecting } from '../../../redux/controls';
import { updateYahtzeeBonus } from '../../../redux/scorecard';


class YahtzeeBonus extends React.Component{
    constructor(){
        super();
        this.state = {
            isSelected: false
        }
        this.handleSelected = this.handleSelected.bind(this);
        this.updateYahtzeeBonusScore = this.updateYahtzeeBonusScore.bind(this);
    }

    componentWillReceiveProps(){
        if(!this.props.allowSelection && this.state.isSelected){
            this.setState({
                isSelected: false
            })
        }
    }

    handleSelected(){
    if(this.props.controls.allowSelection && this.props.scorecard.yahtzee > 0){
            this.setState(prevState => ({
                isSelected: !prevState.isSelected ? true : false
            }))
        }
            this.props.calculateValue();
        }



    updateYahtzeeBonusScore(){
        this.props.disallowSelection();
        this.props.updateYahtzeeBonus(this.props.value);
        this.props.resetCurrentNums();
        this.props.isDoneSelecting();
    }

    render(){
        const selected = {
            backgroundColor: this.state.isSelected ? '#97AABD' : '#D5DEDC',
            width: this.state.isSelected ? '45px' : '75px',
            height: '35px',
            borderRight: '1px solid black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '3px',
            margin: '2px'
        }

        const confirmed = {
            width: '75px',
            height: '35px',
            borderRight: '1px solid black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '3px',
            margin: '2px',
            backgroundColor: 'darkslategrey',
            color: 'white'
        }


        const totalBonus = this.props.confirmedValue;

        return (
                <div>
                    <div style={selected} onClick={this.handleSelected}>
                    {this.state.isSelected ?
                        <div>
                            {this.props.scorecard.yahtzeeBonus.length > 0 ?
                                totalBonus + 100
                            :
                                 this.props.value
                            }
                        </div>
                    :
                        <div>
                            {/*this displays total bonus added together*/}
                            {totalBonus > 0 ? totalBonus : ''}
                        </div>
                    }
                    </div>
                    {this.state.isSelected ?
                        <div className="lowerSaveBtnDiv">
                            <button     onClick={this.updateYahtzeeBonusScore}><i className="ion-checkmark-circled icon"></i></button>
                        </div>
                    :
                        <div>
                            <span></span>
                        </div>
                    }
                </div>
        )
    }
}

export default connect(state=>state, { disallowSelection, updateYahtzeeBonus, isDoneSelecting })(YahtzeeBonus);
