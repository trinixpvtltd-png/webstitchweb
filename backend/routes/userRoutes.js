const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');
const { authMiddleware } = require('../middlewares/auth_middleware');

// User Auth Routes
router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

// Protected Routes
router.get('/me', authMiddleware, userController.me);
router.get('/:id/purchases', authMiddleware, userController.getUserPurchases);

module.exports = router;
