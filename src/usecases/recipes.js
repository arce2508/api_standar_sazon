const Recipes = require('../models/recipes')

function getAll () {
    return Recipes.find({})
}
  
function getById (id) {
return Recipes.findById(id)
}

function create ( recipeObject ) {
    return Recipes.create( recipeObject )
}

function deleteById (id) {
    return Recipes.findByIdAndDelete(id)
}
  
function updateById (id, name, category, user, presentation, productionWardrobe, technique, ingredients, SubRecipes) {
    return Recipes.findByIdAndUpdate(id, { name, category, user, presentation, production, productionWardrobe, technique, ingredients, SubRecipes })
}

module.exports = {
    getAll,
    getById,
    create,
    deleteById,
    updateById
}

