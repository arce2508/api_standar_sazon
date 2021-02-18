const subrecipeRepository = require( '../../repositories/subrecipe-repository')

const getByIdSubRecipe = async (id) => {
  return subrecipeRepository.getById(id)
};

 module.exports = getByIdSubRecipe; 