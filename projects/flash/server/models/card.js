const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    englishWord: {
        type: String,
        required: true
    },
    foreignWord: {
        type: String,
        required: true
    },
    language: String,
    difficulty: {
        type: String,
        enum: ['beginner', 'intermediate', 'advanced'],
        required: true,
    },
    learned: {
        type: Boolean,
        default: false
    },
    deck: {
        type: Schema.Types.ObjectId,
        ref: "Deck",
        required: true
    }
})

module.exports = mongoose.model('Card', cardSchema)
