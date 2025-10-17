const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/services_controller');
const authMiddleware = require('../middlewares/auth_middleware');

// Middleware to check admin role
const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Access denied. Admins only.' });
  }
};

// Get all services (open to all)
router.get('/', servicesController.getAllServices);

// Create a new service (admin only)
router.post('/', authMiddleware, isAdmin, servicesController.createService);

// Update a service (admin only)
router.put('/:id', authMiddleware, isAdmin, servicesController.updateService);

// Delete a service (admin only)
router.delete('/:id', authMiddleware, isAdmin, servicesController.deleteService);

module.exports = router;
