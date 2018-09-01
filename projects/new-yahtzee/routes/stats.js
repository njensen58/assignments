const express = require('express')
const statsRouter = express.Router()
const Stats = require('../models/stats')


statsRouter.get('/:id', (req, res) => {
    Stats.find({user: req.params.id}, (err, stats) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(stats)
    })
})

statsRouter.post('/', (req, res) => {
    const newStats = new Stats()
    newStats.user = req.body.user
    newStats.save((err, stats) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(stats)
    })
})

statsRouter.put('/:id', (req, res) => { 

    Stats.findOneAndUpdate(
        {user: req.params.id}, 
        {$push: {"prevcards": req.body._id}},
        {new: true},
    (err, updatedStatcard) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(updatedStatcard)
    })
})

module.exports = statsRouter