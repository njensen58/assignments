const React = require('react');
const ReactDOM = require('react-dom');
const Greeter = require('Greeter');

  let firstName = 'Nate';
  let message = 'This is my actual message';

    ReactDOM.render(
      <Greeter name={ firstName }/>,
      document.getElementById('app')
    );
