import React from 'react';
import FriendList from './FriendList';

function App(){
  const container = {
    display: 'grid',
    gridColumnsTemplate: '1fr 2fr 1fr'
  }

  return (
    <div style={container}>
      <FriendList />
    </div>
  )
}

export default App;
