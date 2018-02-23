import React from 'react';
import Navbar from './Navbar';


function Header(){
  return (
    <div className="headerBox">
      <div className="headerOverlay">
      <Navbar />
        <h1>Clean Blog</h1>
        <h2>A Blog Theme by Start React</h2>
      </div>
    </div>
  )
}

export default Header;
