const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid/v1');
const app = express();

app.use(bodyParser.json());

const movies = [
    {
        id: 'ac901e80-2259-11e8-864d-817f446dde3f',
        title: 'The Matrix',
        genre: 'action'
    },
    {
        id: '2fs01e80-2259-11e8-425d-817f446dde3f',
        title: 'What About Bob',
        genre: 'comedy'
    },
    {
        id: 'gs401e80-2259-11e8-864d-8234246dde3f',
        title: 'Moonrise Kingdom',
        genre: 'comedy'
    },
    {
        id: 'ac901e80-2235-11e8-8624d-817f46dde3f',
        title: 'Bad Boys III',
        genre: 'action'
    },
    {
        id: 'ac901e80-2259-11e8-864d-817f446dde3f',
        title: 'Cabin in the Woods',
        genre: 'horror'
    }
]


app.get('/movies', (req, res) => {
    if(req.query.genre){
        res.send(movies.filter(movie => movie.genre === req.query.genre))
    }
    res.send(movies)
})


app.listen(4000, () => {
    console.log('Server is up on port 4000');
})
