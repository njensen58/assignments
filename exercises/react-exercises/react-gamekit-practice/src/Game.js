import React from 'react';
import { Loop, Stage } from 'react-game-kit';
import LevelOne from './LevelOne';


class Game extends React.Component {

    render(){    
        return (
            <Loop>
                <Stage>
                    <LevelOne />
                </Stage>
            </Loop>
        )
    }
}

export default Game;
