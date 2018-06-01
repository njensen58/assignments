import React, { Component } from 'react';

import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Services from "./Components/Services";
import Contact from './Components/Contact';
import Footer from './Components/Footer';


import { Route, Switch } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/about" component={ About }/>
        <Route path="/services" component={ Services}/>
        <Route path="/contact" component={ Contact }/>
        </Switch>
      <Footer />
      </div>
    );
  }
}

export default App;
