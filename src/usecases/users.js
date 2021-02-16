
const User = require('../models/users')

function getAll () {
    return User.find()    
    }


function getById (id) {
    return User.findById(id)
}

module.exports = {
    getAll,
    getById
}