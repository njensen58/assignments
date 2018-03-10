const express = require('express');
const topicRoutes = express.Router();
const Topic = require('../models/topics');



topicRoutes.get('/', (req, res) => {
    Topic.find((err, votes) => {
        if (err) return res.status(500).send(err);
        return res.send(votes);
    })
})


topicRoutes.post('/', (req, res) => {
    const newTopic = new Topic(req.body);
    newTopic.save(err => {
        if (err) return res.status(500).send(err);
        return res.send(newTopic);
    })
})


topicRoutes.put('/:id', (req, res) => {
    Topic.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedItem) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedItem);
    })
})


topicRoutes.delete('/:id', (req, res) => {
    Topic.findByIdAndRemove(req.params.id, (err, removedItem) => {
        if (err) return res.status(500).send(err);
        return res.send(removedItem);
    })
})


module.exports = topicRoutes;
