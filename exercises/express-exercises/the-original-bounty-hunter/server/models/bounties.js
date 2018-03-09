const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bountySchema = new Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    isLiving: Boolean,
    bountyAmount: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Bounties', bountySchema);
