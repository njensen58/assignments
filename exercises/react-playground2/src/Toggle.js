import React from 'react';

class Toggle extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isToggleOn: true,
      color: 'blue'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      color: prevState.color === 'blue' ? 'green' : 'blue'
    }));
  }
  render() {

    const colors = {
      backgroundColor: this.state.color
    }

    return (
      <div>
        <h1 style={colors}>Hello line</h1>
        <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    )
  }
}

export default Toggle;
