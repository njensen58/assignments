const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const levelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    difficulty: [{
        type: String,
        enum: ['Easy', 'Medium', 'Hard', 'Reverse'],
        required: true
    }],
    mode: [{
        type: String,
        enum: ['Battle Mode', 'Grand-Prix', 'VS']
    }]
})



module.exports = mongoose.model('Level', levelSchema)
