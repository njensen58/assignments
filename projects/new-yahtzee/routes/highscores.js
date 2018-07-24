const express = require('express')
const highscoreRouter = express.Router()
const Highscores = require('../models/highscores')


// Global Highscores
highscoreRouter.get('/', (req, res) => {
    Highscores.find((err, highscores) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send({ message: "Global Highscores", highscores })
    })
})


// User Highscores
highscoreRouter.get('/:id', (req, res) => {
    Highscores.find({user: req.params.id}, (err, highscores) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send({ message: "Personal Highscores", highscores })
    })
})

highscoreRouter.post('/', (req, res) => {
    const newHighscore = new Highscores(req.body)
    newHighscore.user = req.user._id
    newHighscore.save((err, highscore) => {
        if (err) return res.status(400).send(err)
        return res.status(200).send(highscore)
    })
})


module.exports = highscoreRouter