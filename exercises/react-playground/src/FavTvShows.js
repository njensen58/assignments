import React from 'react';
import './styles.css';





function FavTvShows(props){

    const favShowsDiv = {
        gridColumn: '2',
        background: 'url(' + props.img + ')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        height: '200px',
        borderRadius: '20px',
        marginBottom: '20px',
    }

    const overlay = {
        backgroundColor: '#4449',
        height: '200px',
        borderRadius: '20px',
        border: '2px solid white',
        boxShadow: 'rgb(136, 136, 136) -1px 2px 8px 1px'
    }

    const title = {
        color: 'white',
        padding: '10px 0 10px 20px',
        margin: '0',
        fontWeight: 'lighter',
        fontSize: '40px',
        letterSpacing: '2px'
    }

    const genre = {
        fontSize: '20px',
        color: 'white',
        fontWeight: 'lighter',
        paddingLeft: '20px',
        marginTop: '0',
        marginBottom: '10px',
        letterSpacing: '2px'
    }

    const rating = {
        color: 'white',
        fontSize: '18px',
        fontWeight: 'lighter',
        letterSpacing: '2px',
        paddingLeft: '20px',
        display: 'block',
        marginTop: '20px'
    }




    return (
        <div style={ favShowsDiv }>
            <div style={ overlay } className="tileHover">
                <h1 style={ title }>{props.title} </h1>
                <h3 style={ genre }>{ props.genre} </h3>
                <span style={ rating }>{ props.rate } Stars</span>
            </div>
        </div>
    )
}

export default FavTvShows;
