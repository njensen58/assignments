const React = require('react');
const GreeterMessage = require('GreeterMessage');
const GreeterForm = require('GreeterForm');

const Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'React',
      message: 'This is the default message'
    };
  },

  getInitialState: function(){
    return {
      name: this.props.name,
      message: this.props.message
    };
  },

  handleNewData: function(updates){
    this.setState(updates);
  },

  render: function(){
    let name = this.state.name;
    let message = this.state.message;
    const appBox = {
      textAlign: 'center',
      paddingTop: '100px',
      fontSize: '40px'
    };


    return (
      <div style={ appBox }>
          <GreeterMessage name={name} message={message}/>
          <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

module.exports = Greeter;
