const express = require('express')
const cardRouter = express.Router()
const Card = require('../models/card')


cardRouter.get('/', (req, res) => {
    Card.find((err, cards) => {
        if(err) return res.status(500).send(err)
        return res.status(200).send(cards)
    })
})

cardRouter.get('/:id', (req, res) => {
    Card.find({ deck: req.params.id }, (err, cards) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(cards)
    })
})

cardRouter.post('/', (req, res) => {
    const newCard = new Card(req.body)
    newCard.save((err, newCard) => {
        if (err) return res.status(500).send(err)
        return res.status(201).send(newCard)
    })
})

cardRouter.put('/:id', (req, res) => {

})

cardRouter.delete('/:id', (req, res) => {

})


module.exports = cardRouter
