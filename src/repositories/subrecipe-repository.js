const SubRecipe = require ('../models/subRecipe')

const create = async (data) => {
  return SubRecipe.create(data)
}

const search = async (filter= {}) => {
  return SubRecipe.find(filter)
}
module.exports = {
  create,
  search,
}
