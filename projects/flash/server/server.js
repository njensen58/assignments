const express = require('express')
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5858


app.use(bodyParser.json())
app.use(morgan('dev'))


mongoose.connect('mongodb://localhost/flash', () => {
    console.log('Connected to the database!')
})

app.use('/cards', require('./routes/card'))
app.use('/deck', require('./routes/deck'))



app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})
