
const express = require('express')
const server = express()
const userRouter = require('./routes/users')
const subRecipeRouter= require ('./routes/subRecipe-router')
const bodyParser = require ('body-parser') 


server.use(bodyParser.json())
server.use('/users', userRouter)
server.use(subRecipeRouter)

server.get('/', (request, response) => {
    response.json({
        success: true,
        message : 'Standar&SazonApi'
    })
})


module.exports = server
