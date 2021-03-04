const Product = require('../models/product')

function getAll () {
  return Product.find({})
}

async function getById (id) {
  const productExit = await Product.findById(id)
  if (productExit === null) throw new Error(' No existe el producto. ')
  return Product.findById(id)
}

function create (productObject) {
  return Product.create(productObject)
}

async function deleteById (id) {
  const productExit = await Product.findById(id)
  if (productExit === null) throw new Error(' No existe el producto. ')
  return Product.findByIdAndDelete(id)
}

async function updateById (id, productObject) {
  const productExit = await Product.findById(id)
  if (productExit === null) throw new Error(' No existe el producto. ')
  return Product.findByIdAndUpdate(id, productObject, { new: true })
}

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  updateById
}
