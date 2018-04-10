import React from 'react';

function Frog(props){
    return (
        <div style={{
                 height: '50px',
                 width: '50px',
                 backgroundColor: 'limegreen',
                 position: 'absolute',
                 top: props.frogY,
                 left: props.frogX,
                 transition: '.2s',
                 borderRadius: '20px',
                 zIndex: '3'
             }}>
        </div>
    )
}

export default Frog;
