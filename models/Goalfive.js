const mongoose = require('mongoose');
// Schema
const goalfiveDataSchema = new mongoose.Schema({
    goaltitle: {
        type: String,
        required: false
    },
    goalachive: {
        type: String,
        required: false
    },
    goalhowachive: {
        type: String,
        required: false
    },
    goalpicture: {
        type: String,
        required: false
    },
    endDate: {
        type: String,
        required: false
    },
    completed: {
        type: Boolean,
        required: false
    },
    userId: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const goalfive = mongoose.model('goalfive', goalfiveDataSchema)
module.exports = goalfive