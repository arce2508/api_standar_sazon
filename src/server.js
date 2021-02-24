
const express = require('express')

const userRouter = require('./routes/users')
const recipesRouter = require('./routes/recipes')
const productRouter = require('./routes/product')
const authRouter = require('./routes/auth')
const subRecipeRouter = require ('./routes/subRecipe')

const server = express()


server.use(express.json())

server.use('/recipes', recipesRouter)
server.use('/users', userRouter)
server.use('/products',productRouter)
server.use('/auth', authRouter)
server.use('/subRecipes', subRecipeRouter)

const errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err)
    }

    console.error(err)

    res.status(500).json({ error: err })
}

server.use(errorHandler)

module.exports = server
