import React from 'react';


const SuperHero = (props) => {
    return (
        <div style={{background: `url(${props.imgUrl})`}}>
            <h1> { props.name }</h1>
            <button onClick={()=>props.sayCatchPhrase(props.catchPhrase)}>Say Catchphrase</button>
        </div>
    )
}

export default SuperHero;
