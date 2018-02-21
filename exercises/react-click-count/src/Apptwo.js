import React from 'react';

class Apptwo extends React.Component {
  constructor(){
    super();
    this.state = {
      count: 0,
      date: new Date()
    }
    this.handleMultByTwoClick = this.handleMultByTwoClick.bind(this);
    this.handleDivideByTwoClick = this.handleDivideByTwoClick.bind(this);
    this.handlePlusClick = this.handlePlusClick.bind(this);
    this.handleMinusClick = this.handleMinusClick.bind(this);
  }
  
  componentDidMount(){
    this.timerID = setInterval (
      ()=> this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date: new Date()
    })
  }

  handlePlusClick(){
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  handleMinusClick(){
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      }
    })
  }

  handleMultByTwoClick(){
    this.setState(prevState => {
      return {
        count: prevState.count * 2
      }
    })
  }

  handleDivideByTwoClick(){
    this.setState(prevState => {
      return {
        count: Math.round(prevState.count / 2)
      }
    })
  }

  colorChanger(){
    if(this.state.count === 0){
      return 'black';
    } else if(this.state.count > 0){
      return 'green';
    } else if(this.state.count < 0){
      return 'red';
    }
  }

  render(){
    const colorStyle = {
      backgroundColor: this.colorChanger(),
      color: 'white',
    }
    return (
      <div className="container">
        <h2 style={colorStyle} className="clock">{this.state.date.toLocaleTimeString()}</h2>
        <h1 style={colorStyle}>{this.state.count}</h1>
        <button onClick={this.handlePlusClick} className="addBtn" style={colorStyle}> Add One </button>
        <button onClick={this.handleMinusClick} className="minusBtn" style={colorStyle}> Subtract One </button>
        <button onClick={this.handleMultByTwoClick} className="multBtn" style={colorStyle}> Multiply by 2 </button>
        <button onClick={this.handleDivideByTwoClick} className="divBtn" style={colorStyle}> Divide by 2 (round up) </button>
      </div>
    )
  }
}

export default Apptwo;



// mult 2 - must be rounded.
// divide 2 - must be rounded.
