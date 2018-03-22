import React from 'react';
import Project from './Project';

const projectsArr = [
    {
        title: 'Static Website Sample',
        description: 'One of the first websites I made while learning HTML and CSS',
        imgs: [
            require('./resources/business1.png'),
            require('./resources/business2.png'),
            require('./resources/business3.png')
        ],
        url: 'http://sample-business-site.surge.sh'
    },
    {
        title: 'CSS Zen Garden',
        description: 'A practice in HTML and CSS to mimic the CSS Zen Garden example without looking at how it was built.',
        imgs: [
            require('./resources/css-zen1.png'),
            require('./resources/css-zen2.png'),
            require('./resources/css-zen3.png')
        ],
        url: 'http://my-css-zen-garden-example.surge.sh/'
    },
    {
        title: 'Mystic Mountain RPG',
        description: 'A Retro style JavaScript RPG console game made in Node.js.  The link below will take you to the project on Github.  This game includes systems that generate random battle encounters or events, provides battle encounter user controls, and requires the user to play through 2 stages to win and receive a score.',
        imgs: [
            require('./resources/rpg1.png'),
            require('./resources/rpg2.png'),
            require('./resources/rpg3.png')
        ],
        url: 'https://github.com/njensen58/assignments/tree/master/projects/colossal-rpg'
    },
    {
        title: 'Trivia Game',
        description: 'A front-end project used to combine React with Redux, Thunk, and Axios to make asychronous calls to an API.  This was also a challenge in logic in order to pull the question objects from the API and have the user interact with them in trivia question style.',
        imgs: [
            require('./resources/trivia3.png'),
            require('./resources/trivia2.png'),
            require('./resources/trivia1.png')
        ],
        url: 'http://trivia-game-frontend-site.surge.sh'
    },
    {
        title: 'Yahtzee-Clone',
        description: 'A Full-Stack project using the MERN stack.  This was a passion project that was programmed and designed from scratch.  I first developed the dice system, and then the scorecard system.  Once they were both functioning, I put them together and used Redux with session storage to control the game.  All design work was done in CSS.  MongoDB/Mongoose with Express were used to save highscores',
        imgs: [
            require('./resources/yahtzeeclone3.png'),
            require('./resources/yahtzeeclone2.png'),
            require('./resources/yahtzeeclone1.png')
        ],
        url: 'http://yahtzee-clone-app.surge.sh'
    }
]

function MyProjects(props){
    const mappedProjects = projectsArr.map(project => {
        return (
            <Project
                title={project.title}
                description={project.description}
                imgs={project.imgs}
                url={project.url}
            />
        )
    })
    return (
        <div>
            <div className="projectsHeaderBackground">
                <div className="projectsPageOverlay">
                    <div className="projectsPageScroll">
                        <div>
                            <h1>Projects</h1>
                        </div>
                        <div className="mappedProjectsContainer">
                            {mappedProjects}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default MyProjects;
