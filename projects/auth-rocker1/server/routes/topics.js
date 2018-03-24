const express = require('express');
const topicRoutes = express.Router();
const Topic = require('../models/topics');

topicRoutes.get('/', (req, res) => {
    Topic.find((err, topics) => {
        if (err) return res.status(500).send(err);
        return res.send(topics);
    })
})



module.exports = topicRoutes;
