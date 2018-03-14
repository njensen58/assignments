import React from 'react';

let leftMove;
let rightMove;
let upMove;
let downMove;

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            x: 0,
            y: 0
        }
        this.handleMoveRight = this.handleMoveRight.bind(this);
        this.handleStopRight = this.handleStopRight.bind(this);
        this.handleMoveLeft = this.handleMoveLeft.bind(this);
        this.handleStopLeft = this.handleStopLeft.bind(this);
        this.handleMoveUp = this.handleMoveUp.bind(this);
        this.handleStopUp= this.handleStopUp.bind(this);
        this.handleMoveDown = this.handleMoveDown.bind(this);
        this.handleStopDown = this.handleStopDown.bind(this);
    }

    componentDidMount(){
        window.addEventListener("keydown", this.handleKeyPress);
    }

    componentWillUnmount(){
        window.removeEventListener("keydown", this.handleKeyPress);
    }

    handleMoveRight(rightMove){
            this.setState(prevState => ({
                x: prevState.x < 480 ? prevState.x + 5 : prevState.x
        }))
    }

    handleStopRight(rightMove){
        clearInterval(rightMove)
        leftMove = undefined;
        this.setState(prevState => ({
            x: prevState.x !== 480 ? 480 : 0
        }))
    }

    handleMoveLeft(leftMove){
        rightMove = undefined;
        this.setState(prevState => ({
            x: prevState.x !== 0 ? prevState.x - 5 : prevState.x
        }))
    }

    handleStopLeft(leftMove){
        clearInterval(leftMove)
        this.setState(prevState => ({
            x: prevState.x !== 0 ? 0 : 480
        }))
    }

    handleMoveUp(upMove){
        this.setState(prevState => ({
            y: prevState.y !== 480 ? prevState.y + 5 : prevState.y
        }))
    }

    handleStopUp(upMove){
        clearInterval(upMove)
        downMove = undefined;
        this.setState(prevState => ({
            y: prevState.y !== 480 ? 480 : 0
        }))
    }

    handleMoveDown(downMove){
        upMove = undefined;
        this.setState(prevState => ({
            y: prevState.y !== 0 ? prevState.y - 5 : prevState.y
        }))
    }

    handleStopDown(downMove){
        clearInterval(downMove)
        this.setState(prevState => ({
            y: prevState.y !== 0 ? 0 : 480
        }))
    }

    handleKeyPress = (e) => {
        if(e.key === "ArrowRight"){
            clearInterval(leftMove)
            clearInterval(rightMove)
            rightMove = setInterval(()=>this.handleMoveRight(rightMove), 150)
        }
        if(e.key === "ArrowLeft"){
            clearInterval(rightMove)
            clearInterval(leftMove)
            leftMove = setInterval(()=>this.handleMoveLeft(leftMove), 150)
        }
        if(e.key === "ArrowDown"){
            clearInterval(upMove);
            clearInterval(downMove)
            downMove = setInterval(()=>this.handleMoveDown(downMove), 150)
        }
        if(e.key === "ArrowUp"){
            clearInterval(downMove)
            clearInterval(upMove)
            upMove = setInterval(()=>this.handleMoveUp(upMove), 150)
        }
    }

    render() {

        const colorChanger = () => {
            if((this.state.x > 75 && this.state.x < 120) && (this.state.y >= 0 && this.state.y <= 15)){
                return 'red'
            } else {
                return 'lightblue'
            }
        }

        const canvas = {
            backgroundColor: '#555',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center'
        }

        const ball = {
            backgroundColor: colorChanger(),
            height: '25px',
            width: '25px',
            borderRadius: '50%',
            position: 'absolute',
            left: this.state.x,
            bottom: this.state.y
        }

        const gameBord = {
            height: '507px',
            width: '507px',
            position: 'relative',
            border: '1px solid white',
            marginTop: '20px'
        }

        const firepit1 = {
            backgroundColor: 'firebrick',
            height: '20px',
            width: '20px',
            position: 'absolute',
            bottom: '0',
            left: '100px'
        }

        return (
            <div style={canvas} onKeyDown={this.handleKeyPress}>
                <div style={gameBord} className="gameBord">
                    <div style={ball}></div>
                    <div style={firepit1}></div>
                </div>
            </div>
        )
    }
}

export default App;
