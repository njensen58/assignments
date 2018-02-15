import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import './style.css';


function App(){
    return (
        <div className="pageContainer">
            <Navbar />
            <Header />
            <Body />
            <Footer />
        </div>
    )
}


export default App;
