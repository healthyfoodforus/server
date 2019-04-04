const router =  require('express').Router()
const videoController = require('../controllers/videoControllers')

router.get('/:keyword/:type', videoController.getVideos)

module.exports = router