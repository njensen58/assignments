const express = require('express')
const diceboxRouter = express.Router()
const Dicebox = require('../models/dicebox')


diceboxRouter.get('/:id', (req, res) => {
    Dicebox.findOne({user: req.params.id}, (err, dicebox) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(dicebox)
    })
})  

diceboxRouter.post('/', (req, res) => {
    const newDicebox = new Dicebox()
    newDicebox.user = req.body.user
    newDicebox.save((err, newBox) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(newBox)
    })
})

diceboxRouter.put('/:id', (req, res) => {
    Dicebox.findOneAndUpdate({user: req.params.id}, 
        req.body.newDicebox, 
        {new: true}, 
        (err, dicebox) => {
            if (err) res.status(500).send(err)
            return res.status(201).send(dicebox)
    })
})


module.exports = diceboxRouter