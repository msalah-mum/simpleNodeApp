const express = require('express');
const usersController = require('../controller/usersController')

const router = express.Router();

router.post('/signUp', usersController.userSignUpController)



module.exports = router;