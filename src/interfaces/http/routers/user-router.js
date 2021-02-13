const express = require('express');

const userController = require('../controllers/user-controller');
const router = express.Router();

router.get('/users', userController.list);
// router.post('/users/sign-in', userController.signIn);
// router.post('/users/login', userController.login);

module.exports = router;
