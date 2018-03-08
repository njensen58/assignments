const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const uuid = require('uuid/v1')

app.use(bodyParser());

const movies = [
    {
        id: '020128e0-223d-11e8-99b4-d1de87e7a15a',
        title: 'Blade Runner 2049'
    },
    {
        id: '020128e1-223d-11e8-99b4-d1de87e7a15a',
        title: 'King Kong'
    }
]

app.get('/movies', (req, res) => {
    res.send(movies);
})

app.post('/movies', (req, res) => {
    req.body.id = uuid();
    movies.push(req.body);
    return res.send(req.body);
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
