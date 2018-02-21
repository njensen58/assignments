import React from 'react';

class Nameform extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Is Going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}/>
        </label>
        <br />
        <label>
          Number of Guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}/>
        </label>
        <div>
          {console.log(this.state.isGoing)}
          {this.state.numberOfGuests}
        </div>
      </form>
    )
  }
}

export default Nameform;
