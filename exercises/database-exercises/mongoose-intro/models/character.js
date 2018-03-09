const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    coolness: {
        type: Number,
        min: 1,
        max: 10
    },
    isGoodGuy: Boolean,
    favoriteWeapons: [{
        type: String,
        enum: ['Green Shell', 'Red Shell', 'Blue Shell', 'Banana', 'Triple Green Shell', 'Triple Red Shell', 'Star', 'Banana Bunch']
    }],
    address: {
        street: String,
        city: String,
        state: {
            type: String,
            minlength: 2,
            maxlength: 2
        },
        zip: String
    }
});

module.exports = mongoose.model('Character', characterSchema)
