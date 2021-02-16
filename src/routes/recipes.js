const express = require('express')
const recipes = require('../usecases/recipes')

const router = express.Router()

router.get('/', async (request, response) => {
    const allRecipes = await recipes.getAll()

    response.json({
        success: true,
        data: allRecipes
    })
})

router.post('/', async (request, response) => {
    try {
        const recipeCreated = await recipes.create(request.body)

        response.json({
            success: true,
            data: recipeCreated
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            data: {message: error.message}
        })
    }
})

module.exports = router