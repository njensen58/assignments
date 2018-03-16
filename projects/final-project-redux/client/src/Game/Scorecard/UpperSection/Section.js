import React from 'react';
import { connect } from 'react-redux';
import { disallowSelection } from '../../../redux/controls'


class Section extends React.Component{
    constructor(){
        super();
        this.state = {
            isSelected: false,
            isConfirmed: false
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
                    isSelected: !prevState.isSelected ? true : false
                }))
            }
        }
    }

    handleConfirm(){
        if(this.state.isConfirmed === false){
            this.props.disallowSelection();
            this.setState({
                isConfirmed: true
            })
            this.props.updateScore(this.props.value, this.props.section)
        }
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

        return (
            <div>
                {this.state.isConfirmed ?
                <div style={confirmed}>
                    {this.props.confirmedValue}
                </div>
                :
                    <div>
                        <div style={selected} onClick={this.handleSelected}>
                        {!this.state.isSelected ?
                            <div>

                            </div>
                        :
                            <div>
                                {this.props.value >= 0 ?
                                    this.props.value
                                :
                                    ''
                                }
                            </div>
                        }
                        </div>
                        {this.state.isSelected && !this.state.isConfirmed ?
                        <div>
                            <button onClick={this.handleConfirm}>Save</button>
                        </div>
                        :
                        <div>
                            <span></span>
                        </div>
                        }
                    </div>
                }
            </div>
        )
    }
}

export default connect(state=>state, { disallowSelection })(Section);
