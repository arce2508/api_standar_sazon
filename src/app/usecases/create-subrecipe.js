const subrecipeRepository = require( '../../repositories/subrecipe-repository')

const createSubRecipe = async (data) => {
  return subrecipeRepository.create(data)
};

 module.exports = createSubRecipe; 
  