import React from 'react';
import CounterDisplay from './CounterDisplay';


class Counter extends React.Component {
  constructor(){
    super();
    this.state = {
      clickCount: 0
    }
  }
  handleClick = () => {
    this.setState(prevState => {
      return {
        clickCount: prevState.clickCount + 1
      }
    })
  }
  render(){
    return (
      <div>
        <CounterDisplay counter={this.state.clickCount} handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default Counter;
