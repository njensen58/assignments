import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveDie } from '../../redux/dicebox'



class Die extends Component {
    constructor(props){
        super(props)
        this.state = {
            selected: props.die.selected,
        }
    }

    // componentDidMount(){
    //     this.setState({
    //         selected: this.props.die.selected
    //     })
    // }

    selectDie = () => {
        const updatedDie = {
            value: this.props.die.value,
            selected: !this.props.die.selected
        }
        this.props.saveDie(this.props.user, {[this.props.name]: updatedDie})
        this.setState(prevState => ({
            selected: !prevState.selected
        }))
    } 
    

    colorSelect = () => {
        return this.props.die.selected ? "cornflowerblue" : 'white'
    }

    render(){
        const devStyles = {
            die: {
                border: '1px solid black',
                borderRadius: "3px",
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: this.colorSelect()
            }
        }

        return (
            <div style={ devStyles.die } onClick={ this.selectDie }>
                {this.props.die.value}
            </div>
        )
    }
}

export default connect(state=>state, { saveDie })(Die)