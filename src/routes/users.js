
const express = require('express')
const users = require('../usecases/users')
const authMiddleware = require('../middlewares/auth-middleware')

const router = express.Router()

router.post('/', async (request, response) => {
  try {
    const userCreated = await users.create(request.body)

    response.json({
      success: true,
      data: userCreated
    })
  } catch (error) {
    response.json({
      success: false,
      data: { message: error.message }
    })
  }
})

router.use(authMiddleware)
router.get('/', async (request, response) => {
  try {
    const allUsers = await users.getAll()
    response.json({
      success: true,
      data: allUsers
    })
  } catch (error) {
    response.status(400).json({
      success: false,
      data: {
        message: error.message
      }
    })
  }
})

router.get('/:id', async (request, response) => {
  try {
    const usersById = await users.getById(request.params.id)
    response.json({
      success: true,
      data: usersById
    })
  } catch (error) {
    response.status(400).json({
      success: false,
      data: {
        message: error.message
      }
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const deleteUser = await users.deleteById(request.params.id)

    response.json({
      success: true,
      data: deleteUser
    })
  } catch (error) {
    response.json({
      success: false,
      data: { message: error.message }
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const id = request.params.id

    const updateUser = await users.updateById(id, request.body)

    response.json({
      success: true,
      data: updateUser
    })
  } catch (error) {
    response.status(400).json({
      success: false,
      data: {
        message: error.message
      }
    })
  }
})

module.exports = router
