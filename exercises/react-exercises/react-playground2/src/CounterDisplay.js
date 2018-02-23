import React from 'react';

function CounterDisplay(props){
    return (
      <div>
        <h1>{props.counter}</h1>
        <button onClick={props.handleClick}>+</button>
      </div>
    )
  }


export default CounterDisplay;
