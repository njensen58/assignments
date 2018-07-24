const express = require('express')
const scorecardRouter = express.Router()
const Scorecard = require('../models/scorecard')

scorecardRouter.post('/', (req, res) => {
    const newScorecard = new Scorecard(req.body)
    newScorecard.save((err, scorecard) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send( scorecard )
    })
})

module.exports = scorecardRouter