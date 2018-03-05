import React from 'react';



function About(props){
    return (
        <div className="aboutDiv">
            <div className="aboutDivOverlay">
                <div className="aboutBlock1">
                    <p>This game was developed as a practice in using React with Redux and Thunk to make asynchronous HTTP requests to an API</p>
                </div>
                <div className="aboutBlock2">
                    <p>Triva questions generously provided from the <a href="https://opentdb.com/">Open Trivia Database API</a></p>
                </div>
                <div className="aboutBlock3">
                    <p>Images are provided by <a href="https://unsplash.com/">Unsplash</a></p>
                </div>
                <div className="aboutBlock4">
                    <p>Find me on:</p>
                    <a href="https://github.com/njensen58"><i className="ion-social-github icons2 iGit"></i></a>
                    <a href="https://linkedin.com/in/natej58"><i className="ion-social-linkedin icons2 iLink"></i></a>
                </div>
            </div>
        </div>
    )
}

export default About;
