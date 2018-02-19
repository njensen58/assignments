const React = require('react');
const ReactDOM = require('react-dom');


const myArr1 = [1,2,3];
const myArr2 = [...myArr1];
console.log(myArr2);

    ReactDOM.render(
      <h1>Boilerplate app!</h1>,
      document.getElementById('app')
    );
