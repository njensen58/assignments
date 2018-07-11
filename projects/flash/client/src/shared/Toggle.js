import { Component } from 'react'

class Toggle extends Component {
    constructor(props){
        super(props);
        this.state = {
            isToggled: this.props.toggled || false
        }
    }
    toggle = () => {
        this.setState(prevState => ({ isToggled: !prevState.isToggled }))
    }
    render(){
            const { isToggled } = this.state
            return this.props.render({ toggle: this.toggle, isToggled })
    }
}

export default Toggle;
