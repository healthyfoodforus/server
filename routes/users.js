const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const {authentication} = require('../middlewares/authentication.js')
/* GET users listing. */

router.get('/', UserController.findUser)
router.post('/register', UserController.register);
router.post('/login', UserController.login);


module.exports = router;