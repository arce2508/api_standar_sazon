const express = require("express");
const recipes = require("../usecases/recipe");
const jwt = require('express-jwt')

const router = express.Router();
router.use(jwt({ secret: process.env.JWT_KEY, algorithms: ['HS256'] }))




router.get('/', async (request,response ) => {
  try {
    const {user} = request.query
    const recipesByUser = await recipes.getByUser(user)

    response.json({
      success: true,
      data: recipesByUser,
    });

  }catch(error) {
    response.status(400);
    response.json({
      success: false,
      data: { message: error.message },
    });
  }
});



router.post("/", async (request, response) => {
  try {
    const recipeCreated = await recipes.create(request.body);

    response.json({
      success: true,
      data: recipeCreated,
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
    const recipeDeleted = await recipes.deleteById(request.params.id);

    response.json({
      success: true,
      data: recipeDeleted
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
        const recipeUpdated = await recipes.updateById(id, body)

        response.json({
            success: true,
            data: recipeUpdated
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