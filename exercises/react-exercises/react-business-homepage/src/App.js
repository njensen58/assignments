import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Body from './Body';
import Ratings from './Ratings';
import Footer from './Footer';
import Gallery from './Gallery';
import Bodyfoot from './Bodyfoot';
import './style.css';


function App(){
    return (
        <div className="mobileContainer">
            <div className="topContainer">
            <div className="pageContainer">
                <Navbar />
                <Header />
                <Body />
                <Ratings />
                <Bodyfoot />
            </div>
                <Gallery />
            </div>
            <Footer />
        </div>
    )
}


export default App;
