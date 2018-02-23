import React from 'react';
import Header from './Header';
import BlogList from './BlogList';
import Footer from './Footer';
import './style.css';



class App extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <BlogList />
        <Footer />
      </div>
    )
  }
}


export default App;
