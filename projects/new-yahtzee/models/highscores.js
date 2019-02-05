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
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Highscores', highscoreSchema)