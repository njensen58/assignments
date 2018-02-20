import React from 'react';
import Pets from './Pets';
import PropTypes from 'prop-types';


function Friend(props){
  const petMap = props.pets.map((pet, index) => {
    return (
      <Pets
        name={(index + 1 + '.') + ' ' + pet.name}
        breed={pet.breed}
        key={pet.name + '-' + index}
      />
    )
  })

  const friendsContainer = {
    gridColumn: '2',
    margin: '20px',
    backgroundColor: '#ddd',
    padding: '2px 10px 10px 10px',
    borderRadius: '10px',
    fontWeight: 'lighter'
  }

  const h1 = {
    textAlign: 'center',
    borderBottom: '1px solid black'
  }

  return (
    <div style={friendsContainer}>
      <h1 style={h1}>{props.name}</h1>
      <h3>{props.name} is {props.age} years old, and has the following Pets: </h3>
      {petMap}
    </div>
  )
}

Friend.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
}

export default Friend;
