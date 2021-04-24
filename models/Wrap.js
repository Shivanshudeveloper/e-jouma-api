const mongoose = require('mongoose');
// Schema
const wrapsDataSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: false
    },
    goal1: {
        type: String,
        required: false
    },
    goal2: {
        type: String,
        required: false
    },
    goal3: {
        type: String,
        required: false
    },
    goal4: {
        type: String,
        required: false
    },
    goal5: {
        type: String,
        required: false
    },
    gratitude1: {
        type: String,
        required: false
    },
    gratitude2: {
        type: String,
        required: false
    },
    gratitude3: {
        type: String,
        required: false
    },
    gratitude4: {
        type: String,
        required: false
    },
    gratitude5: {
        type: String,
        required: false
    },
    todaydate: {
        type: String,
        required: false
    },
    soulprint: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const wraps = mongoose.model('wraps', wrapsDataSchema)
module.exports = wraps