const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/services_controller');
const { authMiddleware, requireRole } = require('../middlewares/auth_middleware');

// Get all services (open to all)
router.get('/', servicesController.getAllServices);

// Create a new service (admin only)
router.post('/', authMiddleware, requireRole('admin'), servicesController.createService);

// Update a service (admin only)
router.put('/:id', authMiddleware, requireRole('admin'), servicesController.updateService);

// Delete a service (admin only)
router.delete('/:id', authMiddleware, requireRole('admin'), servicesController.deleteService);

module.exports = router;
