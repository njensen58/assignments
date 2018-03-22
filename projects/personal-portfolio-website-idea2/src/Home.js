import React from 'react';



function Home(props){
    return (
        <div className="headerBackground">
            <div className="pageOverlay">
                <div className="homePageScroll">
                    <h1>Nate Jensen</h1>
                    <h2>Design / Develop / Program</h2>
                    <div className="bodyDiv">
                        <div className="introLeftSideContainer">
                            <h3>Let me introduce myself...</h3>
                            <img src={require('./resources/me.jpg')} alt="Me"/>
                            <button>Download Resume</button>
                        </div>
                        <div className="introRightSideContainer">
                            <ul> <h4>I am a:</h4>
                                <li>Developer</li>
                                <li>Traveler</li>
                                <li>Learner</li>
                                <li>Artist</li>
                                <li>Musician</li>
                            </ul>
                        </div>
                        <div className="homeFullContainer">
                            <p>
                                I left a career in finance to pursue a creative career in web development and programming.
                            </p>
                        </div>
                        <div className="homeSkillsTitle">
                            <h3> - Skills // Tech - </h3>
                        </div>
                        <div className="homeSkillsLeft">
                            <ul>
                                <li>JavaScript</li>
                                <li>Node JS</li>
                                <li>React/Redux</li>
                                <li>HTML/CSS</li>
                                <li>JSON</li>
                                <li>Lodash</li>
                            </ul>
                        </div>
                        <div className="homeSkillsRight">
                            <ul>
                                <li>Git</li>
                                <li>Express</li>
                                <li>Mongoose/MongoDB</li>
                                <li>Jquery</li>
                                <li>Photoshop</li>
                                <li>Illustrator</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
