import React from 'react';

class Log extends React.Component {
    constructor(){
        super();
        this.state = {
            y: 0,
            x: 0,
            forward: true,
            firstLoad: true
        }
        this.logMovement = this.logMovement.bind(this);
    }

    componentWillUpdate(){
        if(this.props.frogY > this.state.y - 25 && this.props.frogY < this.state.y + 25){
            if(this.props.frogX > this.state.x + 35 || this.props.frogX < this.state.x - 35){
                   this.props.startOver();
               }
            }
        }


    componentDidMount(){
        if(this.state.firstLoad){
            let velocity = Math.floor(Math.random() * (200 - 100)) + 100;
            let randomX = Math.floor(Math.random() * (210 - 50)) + 50;
            this.setState({
                y: this.props.logY,
                x: randomX,
                firstLoad: false
            })
            setInterval(this.logMovement, velocity);
        }
    }


    logMovement(){
        if(this.state.x < 235 && this.state.forward){
            this.setState(prevState => ({
                x: prevState.x + 5
            }))
        } else if(this.state.x >= 235 || !this.state.forward){
            this.setState(prevState => ({
                x: prevState.x - 5,
                forward: false
            }))
        }
        if(this.state.x <= 0){
            this.setState({
                forward: true
            })
        }
    }

    render(){
        const logStyle = {
            height: '50px',
            width: '70px',
            backgroundColor: '#6D5227',
            position: 'absolute',
            left: this.state.x,
            borderRadius: '15px',
            top: this.state.y,
            zIndex: '1',
            transition: '.3s'
        }

        return (
            <div style={logStyle}></div>
        )
    }
}

export default Log;
