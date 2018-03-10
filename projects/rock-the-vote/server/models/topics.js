const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const topicSchema = ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    votes: Number,
    comments: [String]
})

module.exports = mongoose.model('Topics', topicSchema);
