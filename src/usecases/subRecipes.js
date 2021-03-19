const SubRecipes = require('../models/subRecipe')

function getByUser (userId) {
  return SubRecipes.findById(userId)
}

async function subRecipeGetById (id) {
  const recipeExit = await SubRecipes.findById(id)
  if (recipeExit === null) throw new Error('No existe la receta')
  return SubRecipes.findById(id)
}

function createSubRecipe (recipeObject) {
  return SubRecipes.create(recipeObject)
}

async function SubRecipeDeleteById (id) {
  const recipeExit = await SubRecipes.findById(id)
  if (recipeExit === null) throw new Error('No existe la receta')
  return SubRecipes.findByIdAndDelete(id)
}

async function SubRecipeUpdateById (id, recipeObject) {
  const recipeExit = await SubRecipes.findById(id)
  if (recipeExit === null) throw new Error('No existe la receta')
  return SubRecipes.findByIdAndUpdate(id, recipeObject, { new: true })
}

module.exports = {
  createSubRecipe,
  getByUser,
  SubRecipeDeleteById,
  SubRecipeUpdateById,
  subRecipeGetById
}
