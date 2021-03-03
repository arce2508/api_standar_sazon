
const { request, response } = require('express')
const express = require('express')
const auth = require('../usecases/auth')

const router = express.Router()

router.post('/login', async (request, response) => {
  try {
    const { email, password } = request.body
    const token = await auth.login(email, password)
    response.json({
      success: true,
      message: 'User logge in',
      data: {
        token: token
      }
    })
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: error.message
    })
  }
})

module.exports = router
