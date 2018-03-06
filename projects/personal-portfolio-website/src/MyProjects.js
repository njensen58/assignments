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
        title: 'Triva Game',
        description: 'A front-end project used to combine React with Redux, Thunk and Axios to make asychronous calls to an API.',
        imgs: [],
        url: 'http://trivia-game-app-example.surge.sh'
    }
]

function MyProjects(props){
    const mappedProjects = projectsArr.map(project => {
        console.log(project);
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
        </div>
    )

}

export default MyProjects;
