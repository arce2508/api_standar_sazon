const mongoose = require('mongoose');

const SubRecipeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    classification: {
      type: String,
      enum: ['sauce', 'soup', 'dessert', 'main-course', 'drinks', 'tickets'],
      trim: true,
    },

    fecha: {
      type: Date,
      required: true,
    },

    image: {
      type: String,
      trim: true,
    },

    ingredients: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products',
      },
    ],

    netWeight: {
      type: Number,
      enum: ['kg', 'gr', 'l'],
      required: true,
    },

    unitWeight: {
      type: Number,
      enum: ['kg', 'gr', 'l'],
      required: true,
    },
  },
  {
    timestamp: true,
  },
);

module.exports = mongoose.model('SubRecipe', SubRecipeSchema);
