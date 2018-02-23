import React from 'react';
import Square from './Square'

function DjBoard(props){
    const boardContainer = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '220px 220px',
        border: '2px dashed #ddd',
        margin: '10px 10px 5px 10px',
        borderRadius: '20px',
        backgroundColor: '#ddd'
    }
    const topLeftSquare = {
        gridColumn: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    const topRightSquare = {
        gridColumn: '2',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    const bottomLeftSquare = {
        gridColumn: '1',
        gridRow: '2',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    const bottomRightSquare = {
        gridColumn: '2',
        gridRow: '2',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        <div style={boardContainer}>
            <div
                style={topLeftSquare}>
                <Square
                    color={props.gridColors.one}
                    text={props.text.one}
                />
            </div>
            <div
                style={topRightSquare}>
                <Square
                    color={props.gridColors.two}
                    text={props.text.two}
                />
            </div>
            <div
                style={bottomLeftSquare}>
                <Square
                    color={props.gridColors.three}
                    text={props.text.three}
                />
            </div>
            <div
                style={bottomRightSquare}>
                <Square
                    color={props.gridColors.four}
                    text={props.text.four}
                />
            </div>
        </div>
    )
}

export default DjBoard;
