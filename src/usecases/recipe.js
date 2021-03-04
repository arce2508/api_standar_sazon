const Recipes = require('../models/recipes')
const User = require('../models/users')

async function getByUser (idUser) {
  if (!idUser) {
    return Recipes.find({})
  }
  const userRecipe = await User.findById(idUser)
  if (userRecipe === null) throw new Error('No existe el user')
  return Recipes.find({ user: idUser })
}

async function getById (id) {
  const recipeExit = await Recipes.findById(id)
  if (recipeExit === null) throw new Error('No existe la receta')
  return Recipes.findById(id)
}

function create (recipeObject) {
  return Recipes.create(recipeObject)
}

async function deleteById (id) {
  const recipeExit = await Recipes.findById(id)
  if (recipeExit === null) throw new Error('No existe la receta')
  return Recipes.findByIdAndDelete(id)
}

async function updateById (id, recipeObject) {
  const recipeExit = await Recipes.findById(id)
  if (recipeExit === null) throw new Error('No existe la receta')
  return Recipes.findByIdAndUpdate(id, recipeObject, { new: true })
}

module.exports = {
  getById,
  create,
  deleteById,
  updateById,
  getByUser
}
