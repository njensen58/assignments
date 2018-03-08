const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid/v1');
const app = express();

const movieRoutes = require('./routes/movies')
const tvshowRoutes = require('./routes/tvshows')

app.use(bodyParser.json());

app.use('/movies', movieRoutes);
app.use('/tvshows', tvshowRoutes);




app.listen(4000, () => {
    console.log('Server is running on port 4000')
})
