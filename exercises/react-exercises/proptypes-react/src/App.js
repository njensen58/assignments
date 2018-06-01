import React from 'react';
import PropTypes from 'prop-types'

const App = (props) => {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <p>Age: {props.age}</p>
        </div>
    )
}

App.defaultProps = {
    name: "Nate",
    age: 28
}

App.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}

export default App;
