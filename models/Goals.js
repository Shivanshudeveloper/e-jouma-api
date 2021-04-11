const mongoose = require('mongoose');
// Schema
const goalsDataSchema = new mongoose.Schema({
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
    todaydate: {
        type: String,
        required: false
    },
    userId: {
        type: String,
        required: false
    },
    completed: {
        type: Boolean,
        required: false
    },
    endDate: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const goals = mongoose.model('goals', goalsDataSchema)
module.exports = goals