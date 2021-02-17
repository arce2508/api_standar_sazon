
const express = require('express')
const users = require('../usecases/users')

const router = express.Router()

router.get('/', async ( request, response ) => {
    try {
        const allUsers = await users.getAll()
        response.json({
            success : true,
            data: allUsers
        })

    } catch (error) {
        response.status(400).json({
            success : false,
            data: {
                message: error.message
            }
        })   
    }
})

router.get('/:id', async ( request, response ) => {
    const usersById = await users.getById(request.params.id)
    
    response.json({
        success : true,
        data: usersById
        })
    })


router.post('/', async (request, response) => {
    try{
        const userCreated = await users.create(request.body)
        
        response.json({
            success: true,
            data: userCreated
        })

    } catch (error) {
        response.json({
            success:false,
            data: {message: error.message}
        })
    }       
}) 

module.exports = router 