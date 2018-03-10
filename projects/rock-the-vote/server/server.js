const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(morgan('dev'));


mongoose.connect('mongodb://localhost/rock-the-vote', (err) => {
    if (err) throw err;
    console.log('Connected to the Database');
})


app.use('/topics', require('./routes/topics'));




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
