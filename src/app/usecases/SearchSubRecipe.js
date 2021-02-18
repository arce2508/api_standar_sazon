const subrecipeRepository = require ( '../../repositories/subrecipe-repository')

const searchSubRecipe = async (data) => {
return subrecipeRepository.search(data)
};

 module.exports = searchSubRecipe
