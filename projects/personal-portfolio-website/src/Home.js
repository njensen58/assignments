import React from 'react';



function Home(props){
    return (
        <div>
            <div className="headerBackground">
                <div>
                    <h1>Nate Jensen</h1>
                    <h2>Design / Develop / Program</h2>
                </div>
            </div>
            <hr className="bodyHr"/>
            <div className="bodySection1">
                <h3>Let me introduce myself...</h3>
                <div className="introDiv">
                    <img src={require('./resources/me.jpg')} alt="Me"/>
                        <ul> <h4>I am a:</h4>
                            <li>Developer</li>
                            <li>Traveler</li>
                            <li>Learner</li>
                            <li>Artist</li>
                            <li>Musician</li>
                        </ul>
                </div>
                <div className="introDivSummary">
                    While I have many passions and hobbies, this site is for my work in computer programming and design.
                </div>
            </div>
        </div>
    )
}

export default Home;
