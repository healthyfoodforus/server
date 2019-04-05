const express = require('express')
const router = express.Router()
const zomatoController = require('../controllers/zomatoController')

router.get('/getCategories', zomatoController.getCategories)
router.get('/getCity', zomatoController.getCity)
router.get('/getCollections', zomatoController.getCollections)
router.get('/getCuisines', zomatoController.getCuisines)
router.get('/getEstablishments', zomatoController.getEstablishments)

//Yang Penting Ini!
router.get('/getHealthyRestaurants', zomatoController.getHealthyRestaurants)

module.exports = router;