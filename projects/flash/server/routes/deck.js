const express = require('express')
const deckRouter = express.Router()
const Deck = require('../models/deck')

deckRouter.get('/', (req, res) => {
    Deck.find((err, decks) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(decks)
    })
})

deckRouter.get('/:id', (req, res) => {
    Deck.findById({_id: req.params.id}, (err, deck) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(deck)
    })
})

deckRouter.post('/', (req, res) => {
    const newDeck = new Deck(req.body)
    newDeck.save((err, newDeck) => {
        if (err) return res.status(500).send(err)
        return res.status(201).send(newDeck)
    })
})


module.exports = deckRouter;
