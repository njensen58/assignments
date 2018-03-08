const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const movieRoutes = require('./routes/movies')

app.use(bodyParser.json());

app.use((req, res, next) => {
    req.didIFart = {someoneFarted: true};
    next();
})

app.use('/movies', movieRoutes);


app.listen(4000, () => {
    console.log('Server is running on Port 4000');
})
