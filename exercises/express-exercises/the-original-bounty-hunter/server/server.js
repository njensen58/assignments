const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const uuid = require('uuid/v1');
const port = process.env.PORT || 4000


app.use(bodyParser.json());
app.use(morgan('dev'));

mongoose.connect('mongodb://localhost/bounty-hunter', (err) => {
    if (err) throw err;
    console.log('Connected to the database');
})

app.use('/bounty', require('./routes/bounties'));



app.listen(port, () => {
    console.log('Server is running on port 4000');
})
