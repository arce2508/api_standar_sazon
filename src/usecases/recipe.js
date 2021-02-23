const Recipes = require('../models/Recipe')

function getAll () {
    return Recipes.find({})
}
  
async function getById (id) {
    let recipeExit = await Recipes.findById(id)
    if( recipeExit === null) throw new Error('No existe la receta')
    return Recipes.findById(id)
}

function create ( recipeObject ) {
    return Recipes.create( recipeObject )
}

async function deleteById (id) {
    let recipeExit = await Recipes.findById(id)
    if( recipeExit === null) throw new Error('No existe la receta')
    return Recipes.findByIdAndDelete(id)
}
  
async function updateById ( id, recipeObject ) {
    let recipeExit = await Recipes.findById(id)
    if( recipeExit === null) throw new Error('No existe la receta')
    return Recipes.findByIdAndUpdate(id, recipeObject, {new: true})
}

module.exports = {
    getAll,
    getById,
    create,
    deleteById,
    updateById
}
