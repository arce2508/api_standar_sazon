const express = require ('express')

const controller = require ('../../src/controllers/subrecipe-controller')
const router = express.Router ()

router.post ('/subRecipe', controller.createSubRecipe);
router.get ('/subRecipe', controller. searchSubRecipeController);

module.exports = router; 