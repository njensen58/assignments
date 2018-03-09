const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const port = process.env.PORT || 4000

app.use(bodyParser.json());
app.use(morgan('dev'));

    mongoose.connect('mongodb://localhost/mario-kart', (err) => {
        if(err) throw err;
        console.log('Connected to the database')
    });

app.use('/characters', require('./routes/character'));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
