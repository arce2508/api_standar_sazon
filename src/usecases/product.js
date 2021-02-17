const Product = require('../models/product')

function getAll () {
    return Product.find({})
}
  
function getById (id) {
return Product.findById(id)
}

function create ( recipeObject ) {
    return Product.create( recipeObject )
}

function deleteById (id) {
    return Product.findByIdAndDelete(id)
}
  
function updateById (id, name, priceUnit, category, measureByBuy, description, image) {
    return Recipes.findByIdAndUpdate(id, {name, priceUnit, category, measureByBuy, description, image}

module.exports = {
    getAll,
    getById,
    create,
    deleteById,
    updateById
}
