const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    englishWord: {
        type: String,
        required: true,
        lowercase: true
    },
    foreignWord: {
        type: String,
        required: true,
        lowercase: true
    },
    language: {
        type: String,
        lowercase: true
    },
    difficulty: {
        type: String,
        enum: ['beginner', 'intermediate', 'advanced'],
        required: true,
    },
    learned: {
        type: Boolean,
        default: false,
        lowercase: true
    },
    deck: {
        type: Schema.Types.ObjectId,
        ref: "Deck",
        required: true
    }
})

module.exports = mongoose.model('Card', cardSchema)
