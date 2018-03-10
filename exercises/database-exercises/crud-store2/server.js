const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(morgan('dev'));

mongoose.connect('mongodb://localhost/inventory2', (err) => {
    if (err) throw err;
    console.log('Connected to the database')
})

app.use('/inventory2', require('./routes/inventory'));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
