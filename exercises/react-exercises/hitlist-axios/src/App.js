import React from 'react';
import HitListContainer from './HitListContainer';
import Header from './Header';
import Footer from './Footer';

function App(){
    return (
        <div>
            <Header />
            <h1 className="hitlistTitle">-HIT LIST-</h1>
            <HitListContainer />
            <Footer />
        </div>
    )
}

export default App;
