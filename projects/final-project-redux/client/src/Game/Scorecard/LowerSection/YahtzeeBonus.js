import React from 'react';
import { connect } from 'react-redux';
import { disallowSelection } from '../../../redux/controls'


class YahtzeeBonus extends React.Component{
    constructor(){
        super();
        this.state = {
            isSelected: false
        }
        this.handleSelected = this.handleSelected.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
    }

    componentWillReceiveProps(){
        if(!this.props.allowSelection){
            this.setState({
                isSelected: false
            })
        }
    }

    handleSelected(){
        if(this.props.controls.allowSelection){
            if(this.state.isConfirmed === false){
                this.props.calculateValue();
                this.setState(prevState => ({
                    isSelected: prevState.isSelected ? false : true
                }))
            }
        }
    }

    handleConfirm(){
        this.props.disallowSelection();
        this.props.updateScore('bonus')
    }

    render(){
        const selected = {
            backgroundColor: this.state.isSelected && this.props.value > 0 ? 'dodgerblue' : 'white',
            width: '50px',
            height: '50px',
            border: '1px solid black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '3px',
            margin: '2px'
        }

        const confirmed = {
            width: '50px',
            height: '50px',
            border: '1px solid black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '3px',
            margin: '2px',
            backgroundColor: 'darkslategrey',
            color: 'white'
        }


        const totalBonus = this.props.confirmedValue.length * 100;

        return (
                <div>
                    <div style={selected} onClick={this.handleSelected}>
                    {!this.state.isSelected ?
                        <div>

                        </div>
                    :
                        <div>
                        {totalBonus > 0 ?
                            totalBonus
                        :
                            <span></span>
                        }
                        </div>
                    }
                    </div>
                    {this.state.isSelected ?
                        <div>
                            <button onClick={this.handleConfirm}>Save</button>
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

export default connect(state=>state, { disallowSelection })(YahtzeeBonus);
