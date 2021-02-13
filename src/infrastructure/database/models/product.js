const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    priceUnit: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: ['groceries', 'soups', 'meats'], // teminar de agregar categorias
      required: true,
    },
    measureByBuy: {
      type: String,
      enum: ['lt', 'pz', 'kg', 'can'],
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      trim: true,
    },
  },
  {
    timestamp: true,
  },
);

module.exports = mongoose.model('Product', productSchema);
