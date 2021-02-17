const express = require('express')
const recipes = require('../usecases/product')

const router = express.Router()

router.get('/', async (request, response) => {
    const allProduct = await product.getAll()

    response.json({
        success: true,
        data: allProduct
    })
})

router.post('/', async (request, response) => {
    try {
        const recipeCreated = await product.create(request.body)

        response.json({
            success: true,
            data: productCreated
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
