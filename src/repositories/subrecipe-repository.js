
const SubRecipe = require ('../models/subRecipe')

const create = async (data) => {
  return SubRecipe.create(data)
}

const search = async (filter= {}) => {
  return SubRecipe.find(filter)
}

const update = async (id, data) => {
  return SubRecipe.findByIdAndUpdate(id, data)
}

const findById = async (id) => {
  return SubRecipe.findById(id)
}

module.exports = {
  create,
  search,
  update,
  findById,
}
