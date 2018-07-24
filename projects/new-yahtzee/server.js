const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(bodyParser.json())
app.use(morgan('dev'))


mongoose.connect('mongodb://localhost/yahmix', () => {
    console.log(`Connected to the data stream sir!`)
})


// Auth Routes
app.use('/api', expressJwt({secret: process.env.SECRET}))
app.use('/auth', require('./routes/auth'))



// General Information
app.use('/highscores', require('./routes/highscores'))


// User Specific Information
app.use('/api/highscores', require('./routes/highscores'))
app.use('/api/stats', require('./routes/stats'))



app.listen(5858, () => {
    console.log(`Server is chugging along on port 5858`)
})