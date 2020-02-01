const express = require('express');
const usersController = require('../controller/usersController')

const router = express.Router();

router.post('/signUp', usersController.userSignUpController);
router.post('/signIn', usersController.userSignInController);



module.exports = router;