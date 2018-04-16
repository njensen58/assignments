import React, {Component} from 'react';


export default class Enemy extends Component {
    state = {
        eY: 490,
        eX: 400,
        hit: false
    }

    componentWillUpdate(){
        if(!this.state.hit){
            if(this.state.eY > 35 && this.state.eY < 85){
                if(this.props.pX < this.state.eX + 25 && this.props.pX > this.state.eX - 25){
                    this.props.playerHit();
                    this.setState(prevState => ({
                        hit: !prevState.hit
                    }))
                }
            }
        }
    }

    componentDidMount(){
        let randomX = Math.floor(Math.random() * (370 - 10) + 10);
        let velocity = Math.floor(Math.random() * (100 - 10) + 10);
        this.setState(prevState => ({
            eX: prevState.eX - randomX
        }))
        setInterval(this.moveEnemy, velocity)
    }

    moveEnemy = () => {
        this.setState(prevState => ({
            eY: prevState.eY - 5
        }))
    }

    render(){
        const eStyle = {
            position: 'absolute',
            bottom: this.state.eY,
            left: this.state.eX,
            width: '30px',
            height: '30px',
            backgroundColor: 'red',
            borderRadius: '10px',
            display: this.state.eY < 0 || this.state.eY > 490 || this.state.hit ? 'none' : 'default'
        }

        return (
            <div style={eStyle}></div>
        )
    }
}
