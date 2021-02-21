
const express = require('express')
const userRouter = require('./routes/users')
const recipesRouter = require('./routes/recipes')
const productRouter = require('./routes/product')
const subRecipesRouter = require('./routes/subRecipe')

const server = express()


server.use(express.json())


server.use('/recipes', recipesRouter)
server.use('/users', userRouter)
server.use('/products',productRouter)
server.use('/subRecipes',subRecipesRouter)

server.get('/', (request, response) => {
    response.json({
        success: true,
        message : 'Standar&SazonApi'
    })
})

module.exports = server
