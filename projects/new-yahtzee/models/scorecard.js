const mongoose = require('mongoose')
const Schema = mongoose.Schema


const scorecardSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
    ones: {
        score: {
            type: Number,
            default: 0
        },
        selected: {
            type: Boolean,
            default: false
        }
    },
    twos: {
        score: {
            type: Number,
            default: 0
        },
        selected: {
            type: Boolean,
            default: false
        }
    },
    threes: {
        score: {
            type: Number,
            default: 0
        },
        selected: {
            type: Boolean,
            default: false
        }
    },
    fours: {
        score: {
            type: Number,
            default: 0
        },
        selected: {
            type: Boolean,
            default: false
        }
    },
    fives: {
        score: {
            type: Number,
            default: 0
        },
        selected: {
            type: Boolean,
            default: false
        }
    },
    sixes: {
        score: {
            type: Number,
            default: 0
        },
        selected: {
            type: Boolean,
            default: false
        }
    },
    threeOfAKind: {
        score: {
            type: Number,
            default: 0
        },
        selected: {
            type: Boolean,
            default: false
        }
    },
    fourOfAKind: {
        score: {
            type: Number,
            default: 0
        },
        selected: {
            type: Boolean,
            default: false
        }
    },
    smallStraight: {
        score: {
            type: Number,
            default: 0
        },
        selected: {
            type: Boolean,
            default: false
        }
    },
    largeStraight: {
        score: {
            type: Number,
            default: 0
        },
        selected: {
            type: Boolean,
            default: false
        }
    },
    fullHouse: {
        score: {
            type: Number,
            default: 0
        },
        selected: {
            type: Boolean,
            default: false
        }
    },
    bonus: {
        score: {
            type: Number,
            default: []
        },
        selected: {
            type: Boolean,
            default: false
        }
    },
    yahtzee: {
        score: {
            type: Number,
            default: 0
        },
        selected: {
            type: Boolean,
            default: false
        }
    },
    chance: {
        score: {
            type: Number,
            default: 0
        },
        selected: {
            type: Boolean,
            default: false
        }
    }
})

module.exports = mongoose.model("Scorecard", scorecardSchema)