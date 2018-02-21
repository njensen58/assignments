import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      value: '',
      names: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();
      this.setState(prevState => ({
        names: [...prevState.names, prevState.value],
        value: ''
      }))
  }

  handleChange(e){
    this.setState({
      value: e.target.value
    })
  }


  render(){
    const mappedList = this.state.names.map((name, i) => {
      return (
        <li key={name + '-' + i} style={liStyle}>{name}</li>
      )
    });
    const listStyle = {
      listStyle: 'none'
    }

    const liStyle = {
      color: 'blue'
    }

    return (
      <form onSubmit={this.handleSubmit}>
        Input a name:
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <button>Submit</button>
        <h1>~ {this.state.value}</h1>
        <h3>Name List</h3>
        <ul style={listStyle}>
          {mappedList}
        </ul>
      </form>
    )
  }
}

export default App;
