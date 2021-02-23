const SubRecipes = require('../models/subRecipe')

function subRecipeGetAll () {
    return SubRecipes.find({})
}
  
async function subRecipeGetById (id) {
    let recipeExit = await SubRecipes.findById(id)
    if( recipeExit === null) throw new Error('No existe la receta')
    return Recipes.findById(id)
}

function createSubRecipe ( recipeObject ) {
    return SubRecipes.create( recipeObject )
}

async function SubRecipeDeleteById (id) {
    let recipeExit = await SubRecipes.findById(id)
    if( recipeExit === null) throw new Error('No existe la receta')
    return SubRecipes.findByIdAndDelete(id)
}
  
async function SubRecipeUpdateById ( id, recipeObject ) {
    let recipeExit = await SubRecipes.findById(id)
    if( recipeExit === null) throw new Error('No existe la receta')
    return Recipes.findByIdAndUpdate(id, recipeObject, {new: true})
}

module.exports = {
    createSubRecipe,
    subRecipeGetAll,
    SubRecipeDeleteById,
    SubRecipeUpdateById,
    subRecipeGetById,
}

