
const express = require('express')
const cors = require('cors')
const userRouter = require('./routes/users')
const recipesRouter = require('./routes/recipes')
const productRouter = require('./routes/product')
const authRouter = require('./routes/auth')
const subRecipeRouter = require('./routes/subRecipe')

const server = express()
server.use(cors())
server.use(express.json())

server.use('/recipes', recipesRouter)
server.use('/users', userRouter)
server.use('/products', productRouter)
server.use('/auth', authRouter)
server.use('/subRecipes', subRecipeRouter)
server.get('/', (request, response) => {
  response.json({
    aplicacion: 'Api Standar & sazón',
    developers: [
      { name: 'Eric Trujillo' },
      { name: 'Arce Gutierrez' },
      { name: 'Juan Carlos Hernandez' },
      { name: 'Shari Andrade' }
    ]
  })
})

const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }

  console.error(err)

  res.status(500).json({ error: err.message })
}

server.use(errorHandler)

module.exports = server
