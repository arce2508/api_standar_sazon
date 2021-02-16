const {Schema,model} = require("mongoose");
const ingredientSchema = require ('./ingredients')

const timePerformanceSchema = new Schema ({
  production: {
    type: Number,
  },
  performance:{
    type: Number,
  },
  portionSize: {
    type: Number,
    required: true},

cookingTime: {
  type: Number,
  required: true
},
})

const SubRecipeSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    category: {
      type: String,
      enum: ['starters', 'soups', 'main-courses', 'desserts', 'sauces', 'drinks'],
      required: true
  },
    image: {
      type: String,
      trim: true,
    },
    ingredients: [ ingredientSchema],

    technique: [{
      type: String,
      required: true,
      trim: true }],
      
    productionWardrobe: [{
      type: String,
      required: true,
      trim: true }],

      totalAmount: {
        type: Number,
        required: true
    },
    unitCost:{
      type:Number,
    }
  },
  {
    timestamp: true,
  }
);

module.exports = model("SubRecipes", SubRecipeSchema);
