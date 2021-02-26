const express = require("express");
const subRecipe = require("../usecases/SubRecipes");
const authMiddleware = require("../middlewares/auth-middleware")

const router = express.Router();
router.use(authMiddleware);


router.get("/", async (request, response) => {
  try {
    const allSubRecipes = await subRecipe.getAll(request.body);

    response.json({
      success: true,
      data: allSubRecipes,
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      data: { message: error.message },
    });
  }
});

router.post("/", async (request, response) => {
  try {
    const subRecipeCreated = await subRecipe.create(request.body);

    response.json({
      success: true,
      data: subRecipeCreated,
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      data: { message: error.message },
    });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const subRecipeDeleted = await subRecipe.deleteById(request.params.id);

    response.json({
      success: true,
      data: subRecipeDeleted
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      data: { message: error.message },
    });
  }
});

router.patch("/:id", async (request, response) => {
    try {
        const { params: {id}, body } = request
        const subRecipeUpdated = await subRecipe.updateById(id, body)

        response.json({
            success: true,
            data: subRecipeUpdated
          });
    } catch (error) {
        response.status(400);
        response.json({
          success: false,
          data: { message: error.message },
        });
    }
})

module.exports = router;