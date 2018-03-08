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
                    <h3> -Skills- </h3>
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
                    <h3> -Education- </h3>
                    <div className="educateDivTop">
                        <div>
                            <p className="schoolTitle"><a href="http://vschool.io/"> V SCHOOL</a> - 2018</p>
                            <p> - MERN STACK </p>
                        </div>
                        <div>
                            <p className="schoolTitle">University of Utah</p>
                            <p> - BS Psychology 2014</p>
                        </div>
                    </div>
                </div>
                <div className="contactDiv">
                    <h3> -Contact- </h3>
                    <div>
                        <ul>
                            <li>Email:  Nathan.Jensen.58@gmail.com</li>
                            <li>Phone:  (801) 856-9961</li>
                        </ul>
                    </div>
                    <div>
                        <a
                            href="https://github.com/njensen58"><i
                            className="ion-social-github icons gitIcon"></i>
                        </a>
                        <a
                            href="https://linkedin.com/in/natej58"><i
                            className="ion-social-linkedin icons linkIcon"></i>
                        </a>
                        <a
                            href="https://google.com/+NathanJensen"><i
                            className="ion-social-googleplus icons googIcon"></i>
                        </a>

                    </div>
                </div>
            </div>
            <hr className="bodyHr"/>
        </div>
    )
}

export default About;
