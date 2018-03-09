import React from 'react';
import Project from './Project';

const projectsArr = [
    {
        title: 'Professional Static Website',
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
        title: 'Mystic Mountain (Console RPG)',
        description: 'A Retro JavaScript RPG game made in Node.js, To play the game, do the following:\n\t1. Click the button below and fork the directory on github.\n\t2. ',
        imgs: [],
        url: ''
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
                <div>
                    <h1>Projects</h1>
                </div>
            </div>
            <hr className="bodyHr"/>
            <div className="mappedProjectsContainer">
                {mappedProjects}
            </div>
            <hr className="bodyHr"/>
        </div>
    )

}

export default MyProjects;
