
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Users = require('../models/users')
require("dotenv").config()

async function login (email, password){
 
  const userFound = await Users.findOne({email})

  if (!userFound) throw new Error('Invalid data')

  const isPasswordValid = await bcrypt.compare( password, userFound.password )
  
  if (!isPasswordValid) throw new Error('Invalid data')

  const token = jwt.sign({ id:userFound._id}, process.env.JWT_KEY) 
  console.log()
  return token
}

module.exports = {
  login
}
