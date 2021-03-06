const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressJwt = require('express-jwt');
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(morgan('dev'));


mongoose.connect('mongodb://localhost/myNews-webApp', (err) => {
    if (err) throw err;
    console.log('Connected to the database');
})

app.use('/auth', require('./routes/auth'));
app.use('/api', expressJwt({secret: process.env.SECRET}));



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
