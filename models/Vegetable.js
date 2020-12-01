const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vegeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: false,
    },
    content: {
        type: String,
        required: true,
    },
    
})

module.exports = mongoose.model('Vegetable', vegeSchema)