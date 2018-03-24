const express = require('express');
const app = express();
require("dotenv").config();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressJwt = require('express-jwt');
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(morgan('dev'));


mongoose.connect('mongodb://localhost/rock-the-vote', (err) => {
    if (err) throw err;
    console.log('Connected to the Database');
})

app.use('/auth', require('./routes/auth'));

app.use('/api', expressJwt({secret: process.env.SECRET}));

app.use('/topics', require('./routes/topics'));
app.use('/api/authTopics', require('./routes/authTopics'));




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
