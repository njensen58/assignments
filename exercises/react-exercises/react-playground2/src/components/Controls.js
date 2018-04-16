import React from 'react';

const Controls = (props) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <button style={{
                    bottom: 0,
                    position: 'absolute',
                    padding: '20px 30px'
                }}
                onClick={props.handleLeft}
                > L
            </button>
            <button style={{
                    bottom: 0,
                    position: 'absolute',
                    right: 0,
                    padding: '20px 30px'
                }}
                onClick={props.handleRight}
                > R
            </button>
        </div>
    )
}

export default Controls;
