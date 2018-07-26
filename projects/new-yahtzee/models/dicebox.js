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
    die1: {
        value: {
            type: Number,
            default: 0
        },
        selected: {
            type: Boolean,
            default: false
        }
    },
    die2: {
        value: {
            type: Number,
            default: 0
        },
        selected: {
            type: Boolean,
            default: false
        }
    },
    die3: {
        value: {
            type: Number,
            default: 0
        },
        selected: {
            type: Boolean,
            default: false
        }
    },
    die4: {
        value: {
            type: Number,
            default: 0
        },
        selected: {
            type: Boolean,
            default: false
        }
    },
    die5: {
        value: {
            type: Number,
            default: 0
        },
        selected: {
            type: Boolean,
            default: false
        }
    } 

})

module.exports = mongoose.model("Dicebox", diceboxSchema)