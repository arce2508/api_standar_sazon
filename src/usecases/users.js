
const User = require('../models/users')

function getAll () {
    return User.find()    
    }

function getById (id) {
    return User.findById(id)
}

function create ( name,lastName, email, password, location, membership) {
    return User.create( name,lastName, email, password, location, membership) 
}

function deleteById (id) {
    return User.findByIdAndDelete(id)
}

function updateById (id,name,lastName, email, password, location, membership ) {
    return User.findByIdAndUpdate (id, {id,name,lastName, email, password, location, membership} ) 
}



module.exports = {
    getAll,
    getById,
    create,
    deleteById,
    updateById
}