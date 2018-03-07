import React from 'react';

function About(){
    return (
        <div>
            <div className="aboutHeader">
                <div>
                    <h1>About/Resume</h1>
                    <button>Download Resume</button>
                </div>
            </div>
            <hr className="bodyHr"/>
            <div className="aboutInfoContainer">
                <div className="skillsDiv">
                    <h3>Skills</h3>
                    <div>
                        <ul>
                            <li>JavaScript</li>
                            <li>Node JS</li>
                            <li>React/Redux</li>
                            <li>HTML/CSS</li>
                            <li>JSON</li>
                        </ul>
                        <ul>
                            <li>Git</li>
                            <li>Express</li>
                            <li>Mongoose/MongoDB</li>
                            <li>Photoshop</li>
                            <li>Illustrator</li>
                        </ul>
                    </div>
                </div>
                <div className="educationDiv">
                    <h3>Education</h3>
                </div>
                <div className="contactDiv">
                    <h3>Contact</h3>
                    <div>
                        <ul>
                            <li>Email:  Nathan.Jensen.58@gmail.com</li>
                            <li>Cell:  (801) 856-9961</li>
                        </ul>
                    </div>
                    <div>
                        <a href=""><i className="ion-social-github icons"></i></a>
                        <a href=""><i className="ion-social-linkedin icons"></i></a>
                        <a href=""><i className="ion-social-googleplus icons"></i></a>

                    </div>
                </div>
            </div>
            <hr className="bodyHr"/>
        </div>
    )
}

export default About;
