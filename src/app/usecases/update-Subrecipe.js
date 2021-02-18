const subrecipeRepository = require( '../../repositories/subrecipe-repository')

const updateSubRecipe = async (id, payload) => {
  await subrecipeRepository.update(id, payload)
  console.log(`update subrecipe ${id}`)
  return subrecipeRepository.findById (id)
};

 module.exports = updateSubRecipe;