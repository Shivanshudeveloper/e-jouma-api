const mongoose = require('mongoose');
// Schema
const subscribeuserDataSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const subscribeuser = mongoose.model('subscribeuser', subscribeuserDataSchema)
module.exports = subscribeuser