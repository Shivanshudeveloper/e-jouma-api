const mongoose = require('mongoose');
// Schema
const successfullpaymentDataSchema = new mongoose.Schema({
    transactionId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    },
    businessphoneno: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const successfullpayments = mongoose.model('successfullpayments', successfullpaymentDataSchema)
module.exports = successfullpayments