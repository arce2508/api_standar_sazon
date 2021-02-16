
const express = require('express')
const users = require('./../app/users')

const router = express.Router()

router.get('/', async ( request, response ) => {
    const allUsers = await users.getAll()

    response.json({
        success : true,
        data: allUsers
    })
})

module.exports = router
