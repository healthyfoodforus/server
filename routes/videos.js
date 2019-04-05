const router =  require('express').Router()
const videoController = require('../controllers/videoController')

router.post('/', videoController.getVideos)

module.exports = router