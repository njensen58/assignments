const express = require('express');
const movieRoutes = express.Router();

const movies = {
    title: 'movie 1',
    genre: 'generic'
}

// This is the middleware function that adds the happy obj to the req obj if the get request is to localhost:4000/movies/<anything>
movieRoutes.use('/:id', (req, res, next) => {
    req.happy = {
        isHappy: true,
        isSad: false
    }
    next();
})

// A get request to localhost:4000/movies  -> returns the movie object
movieRoutes.get('/', (req, res) => {
    res.send(movies);
})

// A get request to localhost:4000/movies/<anything>  -> returns {isHappy: true, isSad: false}
movieRoutes.get('/:id', (req, res) => {
    res.send([req.happy, req.didIFart])
})



module.exports = movieRoutes;
