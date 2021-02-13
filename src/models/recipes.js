const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    recipeName: {
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
    image: {
        type: String,
        trim: true
    },
    performancePercent: {
        type: Number,
        require: true,
        trim: true
    },
    technique: {
        type: String,
        required: true,
        trim: true
    },
    ingredients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products'
    }],
    SubRecipes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubRecipes'
    }],
    timestamp: true
},{
    timestamp: true
} )

module.exports = mongoose.model('MainRecipes', recipeSchema)
