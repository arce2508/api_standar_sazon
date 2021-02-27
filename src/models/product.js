const { model, Schema } = require('mongoose')

const ProductSchema = Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true
    },
    priceUnit: {
      type: Number,
      required: true
    },
    category: {
      type: String,
      enum: [
        'groceries',
        'drinks',
        'vegetables',
        'fruits',
        'meat',
        'birds',
        'sausages',
        'fish and seafood',
        'dairy',
        'frozen',
        'omelette and bread',
        'supplies',
        'cleanliness',
        'stationery store',
        'contingences'
      ], // categorias
      required: true
    },
    measureByBuy: {
      type: String,
      enum: ['lt', 'pz', 'kg', 'can'],
      required: true
    },
    description: {
      type: String,
      trim: true
    },
    image: {
      type: String,
      trim: true
    }
  },
  {
    timestamp: true
  }
)

module.exports = model('Products', ProductSchema)
