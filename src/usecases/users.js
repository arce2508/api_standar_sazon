
const Users = require('./../models/users')

function getAll () {
    Users.find({})
}

function getById () {
    Users.getById({})
}

module.exports = {
    getAll,
    getById
}