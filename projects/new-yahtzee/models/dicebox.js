const mongoose = require('mongoose')
const Schema = mongoose.Schema

const diceboxSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    rollCount: {
        type: Number,
        default: 0
    },
    currentRoll: {
        type: [Number],
        default: []
    },
    savedDie: {
        type: [Number],
        default: []
    }
})

module.exports = mongoose.model("Dicebox", diceboxSchema)