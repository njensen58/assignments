import React from 'react';
import Player from './components/Player';
import Controls from './components/Controls';
import Enemy from './components/Enemy';

class App extends React.Component {
    state = {
        pX: 175,
        pY: 60,
        lives: 10,
        enemies: [1]
    }

    componentDidMount(){
        window.addEventListener("keydown", this.handleKeyPress);
    }

    generateEnemy = () => {
        let randomEnemy = Math.floor(Math.random() * 100);
        if(randomEnemy > 95){
            this.setState(prevState => ({
                enemies: prevState.enemies.push(1)
            }))
        }
    }

    componentWillUnmount(){
        window.addEventListener("keydown", this.handleKeyPress)
    }


    handleKeyPress = e => {
        if(e.key === "ArrowLeft"){
            this.handleLeft()
        }
        if(e.key === "ArrowRight"){
            this.handleRight()
        }
        if(e.code === "Space"){
            //Shoot bullet//
        }
    }

    handleLeft = () => {
        if(this.state.pX > 0){
            this.setState(prevState => ({
                pX: prevState.pX - 25
            }))
        }
    }

    handleRight = () => {
        if(this.state.pX < 350){
            this.setState(prevState => ({
                pX: prevState.pX + 25
            }))
        }
    }

    playerHit = () => {
        this.setState(prevState => ({
            lives: prevState.lives - 1
        }))
    }

    render(){
            setInterval(this.generateEnemy, 1000)
        const containerStyle = {
            position: 'relative',
            width: '400px',
            height: '500px',
            border: '1px solid black'
        }

        return (
            <div>
                <div style={containerStyle}>
                    <Player x={this.state.pX} y={this.state.pY}/>
                    <Controls handleLeft={this.handleLeft} handleRight={this.handleRight}/>
                    {this.state.enemies.map((enemy, i) => {
                        return (
                            <Enemy
                                pX={this.state.pX}
                                pY={this.state.pY}
                                playerHit={this.playerHit}
                                key={this.state.pX + i}/>
                            )}
                        )
                    }
                </div>
                <p>Lives: {this.state.lives}</p>
            </div>
        )
    }
}

export default App;
