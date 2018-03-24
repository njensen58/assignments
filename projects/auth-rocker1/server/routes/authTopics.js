const express = require('express');
const authTopicRoutes = express.Router();
const Topic = require('../models/topics');




authTopicRoutes.post('/', (req, res) => {
    const newTopic = new Topic(req.body);

    newTopic.save(err => {
        if (err) return res.status(500).send(err);
        return res.send(newTopic);
    })
})


authTopicRoutes.post('/:id/comment', (req, res) => {
    Topic.findByIdAndUpdate(
        req.params.id,
        {$push: {"comments": req.body}},
        {new: true}, (err, updatedTopic) => {
            if (err) res.status(500).send(err);
            return res.send(updatedTopic);
        }
    )
})


authTopicRoutes.put('/:id', (req, res) => {
    Topic.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedItem) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedItem);
    })
})


authTopicRoutes.delete('/:id', (req, res) => {
    Topic.findByIdAndRemove(req.params.id, (err, removedItem) => {
        if (err) return res.status(500).send(err);
        return res.send(removedItem);
    })
})

module.exports = authTopicRoutes;
