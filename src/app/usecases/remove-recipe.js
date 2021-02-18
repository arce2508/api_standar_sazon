const subrecipeRepository = require( '../../repositories/subrecipe-repository')

const deleteSubRecipe = async (id, payload) => {
  await subrecipeRepository.deleteMany({id, payload})
  return console.log(`delete subrecipe ${id, payload}`)
  
};

 module.exports = deleteSubRecipe;