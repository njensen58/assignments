const express = require('express')
const statsRouter = express.Router()
const Stats = require('../models/stats')


statsRouter.get('/:id', (req, res) => {
    Stats.find({user: req.params.id}, (err, stats) => {
        if (err) return res.status(500).send(err)
        return res.stats(200).send(stats)
    })
})



module.exports = statsRouter