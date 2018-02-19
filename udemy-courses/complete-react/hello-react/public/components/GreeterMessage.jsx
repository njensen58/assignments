const React = require('react');

const GreeterMessage = React.createClass({
  render: function(){
    let name = this.props.name;
    let message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!!</h1>
        <p>{ message }!</p>
      </div>
    );
  }
});


module.exports = GreeterMessage;
