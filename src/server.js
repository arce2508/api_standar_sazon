
const express = require('express')
const userRouter = require('./routes/users')

const server = express()

server.use('/users', userRouter)

server.get('/', (request, response) => {
    response.json({
        success: true,
        message : 'Standar&SazonApi'
    })
})

module.exports = server