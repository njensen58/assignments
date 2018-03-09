const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    isVegan: Boolean,
    doesExpire: Boolean,
    expirationDate: String
})


module.exports = mongoose.model('Inventory', inventorySchema);
