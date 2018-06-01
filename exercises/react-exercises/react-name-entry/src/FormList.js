import React from 'react';

function FormList(props){
    const mappedList = props.names.map((name, i) => {
        return (
                <li key={name + '-' + i}>{name}</li>
        )
    })
      return (
          <div>
            <h1>~ {props.value}</h1>
            <h3>Name List</h3>
                <ul>
                  {mappedList}
                </ul>
          </div>
      )
}

export default FormList;
