import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      count: 0,
    };
    this.handlePlusClick = this.handlePlusClick.bind(this);
    this.handleMinusClick = this.handleMinusClick.bind(this);
  }

  handlePlusClick(){
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
      }
    })
  }

  handleMinusClick(){
    this.setState(prevState => {
      return {
        count: prevState.count - 1,
      }
    })
  }
  render() {

    const color = {
      backgroundColor: this.state.count <= 0 ? 'red' : 'green',
      textAlign: 'center',
      border: '1px solid black',
      margin: '5px',
      gridColumn: '2'
    }

    const container = {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr'
    }

    const textStyle = {
      gridRow: '2',
      gridColumn: '2',
    }

    const minusBtn = {
      gridColumn: '3',
      gridRow: '1'
    }

    const text = this.state.count <= 0 ? 'Negative' : 'Positive';

    return (
      <div style={container} className="containerDiv">
        <button onClick={this.handlePlusClick}>+</button>
        <h1 style={color}>{this.state.count}</h1>
        <h2 style={textStyle}>{text}</h2>
        <button onClick={this.handleMinusClick} style={minusBtn}>-</button>
      </div>
    )
  }
}

export default App;

// mult 2 - must be rounded.
// divide 2 - must be rounded.
