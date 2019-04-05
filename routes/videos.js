const router =  require('express').Router()
const videoController = require('../controllers/videoControllers')

router.post('/', videoController.getVideos)

module.exports = router