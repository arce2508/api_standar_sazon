
const SubRecipe = require ('../models/subRecipe')

const create = async (data) => {
  return SubRecipe.create(data)
}
const getById = async (id) => {
  return SubRecipe.getById(id)
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

const deleteMany = async (id, data) => {
  return SubRecipe.deleteMany (id, data)
}



module.exports = {
  create,
  getById,
  search,
  update,
  findById,
  deleteMany,
}
