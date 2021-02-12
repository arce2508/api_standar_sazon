const mongoose = require("mongoose");

const SubRecipeSchema = Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    classification: {
      type: String,
      enum: ["sauce", "soup", "dessert", "main course", "drinks", "tickets"],
      trim: true,
    },
    fecha: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      trim: true,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = model("SubRecipe", SubRecipeSchema);
