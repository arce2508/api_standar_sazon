
const mongoose = require('mongoose')

const ingredientSchema = Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products'
    },
    grossWeight: {
        type: Number
    },
    netWeight: {
        type:  Number
    },
    performancePercent: {
        type: Number
    },
    portion: {
        type: String,
        trim: true
    },
    priceUnit: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
})

module.exports = ingredientSchema 