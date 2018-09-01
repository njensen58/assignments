const mongoose = require('mongoose')
const Schema = mongoose.Schema


const statSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    wins: {
        type: Number,
        default: 0
    },
    losses: {
        type: Number,
        default: 0
    },
    prevcards: [{
        type: Schema.Types.ObjectId,
        ref: "Scorecard"
    }]
})

module.exports = mongoose.model("Stats", statSchema)