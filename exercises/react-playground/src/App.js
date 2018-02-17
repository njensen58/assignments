import React from 'react';
import FavTvShows from './FavTvShows';


const tvShows = [
    {
        title: "Rick & Morty",
        genre: "Cartoon / Comedy",
        imgUrl: "https://nerdist.com/wp-content/uploads/2017/08/Rick-and-Morty-Portal.jpg",
        starRate: 5
    },
    {
        title: "Westworld",
        genre: "Drama/Action-Adventure",
        imgUrl: "https://www.filmtopp.se/wp-content/uploads/2017/10/Westworlds%C3%A4song2-min-678x381.jpg",
        starRate: 5
    },
    {
        title: "Will & Grace",
        genre: "Comedy / Sitcom",
        imgUrl: "http://cdn.playbuzz.com/cdn/1640e033-5edc-49bd-8a1b-311476a53ee1/d97190e8-64e5-4540-8caa-583ca23a0bec_560_420.jpg",
        starRate: 4.5
    },
    {
        title: "Ghost Adventures",
        genre: "Reality TV / Horror-Suspense",
        imgUrl: "http://www.dreadcentral.com/wp-content/uploads/2015/07/Ghost-Adventures.jpg",
        starRate: 4.5
    }
]

function App(){

    const grid = {
        display: "grid",
        gridTemplateColumns: "1fr 2fr 1fr",
        backgroundColor: '#ddd',
    }

    const mappedTvShows = tvShows.map(show =>
        <FavTvShows title={show.title} genre={show.genre} img={show.imgUrl} rate={show.starRate}/>
    )

    return (
        <div style={ grid }>
            { mappedTvShows }
        </div>
    )
}

export default App;
