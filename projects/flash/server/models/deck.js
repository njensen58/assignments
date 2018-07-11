const mongoose = require('mongoose')
const Schema = mongoose.Schema

const deckSchema = new Schema({
    subject: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Deck', deckSchema)
