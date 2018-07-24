const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(bodyParser.json())
app.use(morgan('dev'))




app.use('/highscores', require('./routes/highscores'))



app.listen(5858, () => {
    console.log(`Server is running on port 5858`)
})