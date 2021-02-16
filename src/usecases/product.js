const Product = require('../models/product')

function getAll () {
    Product.find({})
}

function getById () {
    Product.getById({})
}

module.exports = {
    getAll,
    getById
}
