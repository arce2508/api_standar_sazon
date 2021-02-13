const mongoose = require('mongoose')
const ingredientSchema = require('./ingredients')

const timePerformanceSchema = new mongoose.Schema({
    production:{
        type: Number,
        required: true
    },
    performance: {
        type: Number,
        required: true 
    },
    portionSize: {
        type: Number,
        required: true
    },
    portionQuantity: {
        type: Number,
        required: true
    },
    preparationTime: {
        type: Number,
        required: true
    },
    cookingTime: {
        type: Number,
        required: true
    },
    operatingTemperature:{
        type: Number,
        required: true
    }
})

const directIndirectCostsSchema = new mongoose.Schema({
    totalAmount: {
        type: Number,
        required: true
    },
    workForceDirect: {
        type: Number,
        required: true
    },
    priceSaleByPortion: {
        type: Number,
        required: true
    },
    percentProductionByPortion: {
        type: Number,
        required: true
    },
    productionIndirect: {
        type: Number,
        required: true
    },
    percentProductionByPortion: {
        type: Number,
        default: 0.70
    },
    utilityPercentByPortion: {
        type: Number,
        default: 0.30
    },
    portionUtility: {
        type: Number
    },
    salesPriceByPortion: {
        type: Number
    }

})

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        enum: ['starters', 'soups', 'main courses', 'desserts', 'sauces', 'drinks'],
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    presentation: {
        type: String,
        trim: true
    },
    productionWardrobe: [{
        type: String,
        required: true,
        trim: true
    }],
    performancePercent: {
        type: Number
    },
    technique: [{
        type: String,
        required: true,
        trim: true
    }],
    ingredients: [
        ingredientSchema
    ],
    SubRecipes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubRecipes'
    }],
    directIndirectCosts: directIndirectCostsSchema,
    timePerformance: timePerformanceSchema

},{
    timestamp: true
})


module.exports = mongoose.model('Recipes', recipeSchema)
