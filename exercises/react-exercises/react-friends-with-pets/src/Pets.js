import React from 'react';
import PropTypes from 'prop-types';


function Pets(props){
  const petName = {
    textTransform: 'uppercase',
    fontSize: '15px',
    fontStyle: 'italic',
    borderBottom: '1px solid black'
  }

  return (
    <div>
      <p><span style={petName}>{props.name}</span> is a <span>{props.breed}</span></p>
    </div>
  )
}

Pets.propTypes = {
  name: PropTypes.string,
  breed: PropTypes.string
}

export default Pets;
