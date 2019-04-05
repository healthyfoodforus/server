const express = require('express');
const router = express.Router();
const RecipeController = require('../controllers/recipeController');


router.get('/', RecipeController.getRecipe)


module.exports = router;