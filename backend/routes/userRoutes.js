const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');

// User Auth Routes
router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

module.exports = router;
