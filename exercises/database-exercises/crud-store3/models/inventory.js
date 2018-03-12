const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    cost: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Inventory', itemSchema);
