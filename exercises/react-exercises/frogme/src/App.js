import React from 'react';
import Frog from './Frog';
import Enemy from './Enemy';
import Log from './Log';


class App extends React.Component {
    constructor(){
        super();
        this.state = {
            frogX: 125,
            frogY: 448,
            stageOver: false,
            finishedFrogs: [],
            score: 0,
            lives: 5,
            died: false,
            gameOver: false
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleMoveUp = this.handleMoveUp.bind(this);
        this.handleMoveRight = this.handleMoveRight.bind(this);
        this.handleMoveLeft = this.handleMoveLeft.bind(this);
        this.startOver = this.startOver.bind(this);
        this.gameOver = this.gameOver.bind(this);
    }

    componentWillUpdate(){
        if(this.state.stageOver){
            this.setState({
                frogX: 125,
                frogY: 448,
                stageOver: false
            })
        }
        if(this.state.died){
            this.setState(prevState => ({
                lives: prevState.lives - .5,
                died: false
            }))
        }
        if(this.state.lives === 0 && !this.state.gameOver){
            this.gameOver();
        }
    }

    componentDidMount(){
        window.addEventListener("keydown", this.handleKeyPress);
    }

    componentWillUnmount(){
        window.removeEventListener("keydown", this.handleKeyPress);
    }

    handleKeyPress(e){
        if(e.key === "ArrowUp"){
            this.handleMoveUp();
        }
        if(e.key === "ArrowRight"){
            this.handleMoveRight();
        }
        if(e.key === "ArrowLeft"){
            this.handleMoveLeft();
        }
    }

    handleMoveUp(){
        if(!this.state.stageOver){
            if(this.state.frogY >= 25){
                this.setState(prevState => ({
                    frogY: prevState.frogY - 50
                }))
            }
            if(this.state.frogY <= 0){
                this.setState(prevState => ({
                    stageOver: true,
                    score: prevState.score + 1
                }))
            }
        }
    }

    handleMoveRight(){
        if(this.state.frogX > -25 && this.state.frogX < 250){
            this.setState(prevState => ({
                frogX: prevState.frogX + 25
            }))
        }
    }

    handleMoveLeft(){
        if(this.state.frogX < 325 && this.state.frogX > 10){
            this.setState(prevState => ({
                frogX: prevState.frogX - 25
            }))
        }
    }

    startOver(){
        this.setState({
            frogX: 125,
            frogY: 448,
            died: true
        })
    }

    gameOver(){
        this.setState({
            gameOver: true
        })
    }

    render(){
        const enemyPositionsY = {
            one: 48,
            two: 148,
            three: 248,
            four: 348
        }

        const enemyPositionsX = {
            one: 50,
            two: 200,
            three: 150,
            four: 50
        }

        const logY = {
            one: 100,
            two: 200,
            three: 300,
            four: 400
        }

        return (
            <div className="gameContainer">
                {!this.state.gameOver ?
                    <div>
                <div className="gameBoard">
                    <div style={{backgroundColor: 'forestgreen', gridRow: '2', gridColumn: '1 / -1'}}></div>
                    <div style={{backgroundColor: 'forestgreen', gridRow: '4', gridColumn: '1 / -1'}}></div>
                    <div style={{backgroundColor: 'forestgreen', gridRow: '6', gridColumn: '1 / -1'}}></div>
                    <div style={{backgroundColor: 'forestgreen', gridRow: '8', gridColumn: '1 / -1'}}></div>
                    <div style={{backgroundColor: 'forestgreen', gridRow: '10', gridColumn: '1 / -1'}}></div>
                    <div style={{backgroundColor: 'dodgerblue', gridRow: '3', gridColumn: '1 / -1', position: 'relative'}}></div>
                    <Log
                        frogX={this.state.frogX}
                        frogY={this.state.frogY}
                        logY={logY.one}
                        startOver={this.startOver}
                    />
                    <div style={{backgroundColor: 'dodgerblue', gridRow: '5', gridColumn: '1 / -1', position: 'relative'}}></div>
                    <Log
                        frogX={this.state.frogX}
                        frogY={this.state.frogY}
                        logY={logY.two}
                        startOver={this.startOver}
                    />
                    <div style={{backgroundColor: 'dodgerblue', gridRow: '7', gridColumn: '1 / -1', position: 'relative'}}></div>
                    <Log
                        frogX={this.state.frogX}
                        frogY={this.state.frogY}
                        logY={logY.three}
                        startOver={this.startOver}
                    />
                    <div style={{backgroundColor: 'dodgerblue', gridRow: '9', gridColumn: '1 / -1', position: 'relative'}}></div>
                    <Log
                        frogX={this.state.frogX}
                        frogY={this.state.frogY}
                        logY={logY.four}
                        startOver={this.startOver}
                    />
                    <div style={{
                             position: 'relative',
                             height: '500px',
                             width: '305px',
                             border: '2px solid #444',
                             borderRadius: '3px',
                             gridColumn: '1 / -1'
                         }}>
                        <Frog
                            frogY={this.state.frogY}
                            frogX={this.state.frogX}
                        />
                        <Enemy
                            startPosY={enemyPositionsY.one}
                            startPosX={enemyPositionsX.one}
                            frogY={this.state.frogY}
                            frogX={this.state.frogX}
                            startOver={this.startOver}
                        />
                        <Enemy
                            startPosY={enemyPositionsY.two}
                            startPosX={enemyPositionsX.two}
                            frogY={this.state.frogY}
                            frogX={this.state.frogX}
                            startOver={this.startOver}
                        />
                        <Enemy
                            startPosY={enemyPositionsY.three}
                            startPosX={enemyPositionsX.three}
                            frogY={this.state.frogY}
                            frogX={this.state.frogX}
                            startOver={this.startOver}
                        />
                        <Enemy
                            startPosY={enemyPositionsY.four}
                            startPosX={enemyPositionsX.four}
                            frogY={this.state.frogY}
                            frogX={this.state.frogX}
                            startOver={this.startOver}
                        />
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <p>Score: {this.state.score}</p>
                    <p>Lives: {this.state.lives}</p>
                </div>
                </div>
                :
                <div>Game Over Fucker</div>
                }
            </div>
        )
    }
}

export default App;
