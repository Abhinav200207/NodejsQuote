const mongoose = require('mongoose');

const randomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name must be provided"],
        trim: true,
        maxLength: [30]
    },
    text: {
        type: String,
        required: [true, "quote must be provided"],
    }
})

module.exports = mongoose.model('model', randomSchema);