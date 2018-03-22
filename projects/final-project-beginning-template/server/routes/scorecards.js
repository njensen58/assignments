const express = require('express');
const scorecardRoutes = express.Router();
const Scorecard = require('../models/scorecards');


scorecardRoutes.get('/', (req, res) => {
    Scorecard.find((err, scores) => {
        if(err) return res.status(500).send(err);
        return res.send(scores);
    })
})


scorecardRoutes.post('/', (req, res) => {
    const newScore = new Scorecard(req.body);
    newScore.save(err => {
        if (err) return res.status(500).send(err);
        return res.send(newScore);
    })
})


module.exports = scorecardRoutes;
