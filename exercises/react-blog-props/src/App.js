import React from 'react';
import Header from './Header';
import BlogList from './BlogList';
import Footer from './Footer';
import './style.css';
// import PropTypes from 'prop-types';


function App(){
  return (
    <div>
      <Header />
      <BlogList />
      <Footer />
    </div>
  )
}


export default App;
