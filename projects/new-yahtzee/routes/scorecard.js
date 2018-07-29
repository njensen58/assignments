const express = require('express')
const scorecardRouter = express.Router()
const Scorecard = require('../models/scorecard')

scorecardRouter.get('/:id', (req, res) => {
    Scorecard.find({user: req.params.id}, (err, scorecard) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(scorecard)
    })
})

scorecardRouter.post('/', (req, res) => {
    const newScorecard = new Scorecard()
    newScorecard.user = req.body.user
    newScorecard.save((err, scorecard) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send( scorecard )
    })
})


// Updates db with current score selections
scorecardRouter.put('/:id', (req, res) => {
    console.log(req.body)
    Scorecard.findOneAndUpdate({user: req.params.id},
        req.body, 
        {new: true}, 
        (err, updatedScorecard) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(updatedScorecard)
    })
})

module.exports = scorecardRouter