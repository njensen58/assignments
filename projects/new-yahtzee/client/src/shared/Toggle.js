import { Component } from 'react'

export default class Toggle extends Component {
    constructor(props){
        super(props)
        this.state = { isToggled: props.toggled || false }
    }
    toggle = () => this.setState(prevState => ({ isToggled: !prevState.isToggled }))
    render(){
        return this.props.render({
                    toggle: this.toggle,
                    isToggled: this.state.isToggled
                })
    }
}

