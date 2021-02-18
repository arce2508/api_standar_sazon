const actions = require('../../src/app')

const createSubRecipe = (req,res) => {
  actions
  .createSubRecipe (req.body)
  .then((subRecipe)  => {
    res.json (subRecipe)
  })
  .catch (( error) => {
    const status = 500
    const response = {
      message: error.message,
      status,
    }

    console.error (error)
    res.status(status).json (response)
  })
}

const searchSubRecipeController = (req,res) => {
  actions 
  .searchSubRecipe ()
  .then ((subRecipes) => {
    res.json (subRecipes)
  })
  .catch ((error) => {
    const status = 500
    const response ={
      message: error.message,
      status
    }

    console.error (error)
    res.status(status).json (response)
  })
}

const updateSubRecipeController = (req,res) => {
  actions 
  .updateSubRecipe (req.params.id, req.body) 
  .then ((subRecipes) => {
    res.json (subRecipes)
  })
  .catch ((error) => {
    const status = 400
    const response ={
      message: error.message,
      status
    }

    console.error (error)
    res.status(status).json (response)
  })
}

module.exports = {
 createSubRecipe,
 searchSubRecipeController,
 updateSubRecipeController,

}