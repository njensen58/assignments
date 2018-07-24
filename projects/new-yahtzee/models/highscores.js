const mongoose = require('mongoose')
const Schema = mongoose.Schema

const highscoreSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    yahtzeeScore: {
        type: Number,
        default: 0
    },
    stats: {
        type: Schema.Types.ObjectId,
        ref: "Stats",
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Highscores', highscoreSchema)