const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project_controller');
const authMiddleware = require('../middlewares/auth_middleware');

// Middleware to check admin role
const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Access denied. Admins only.' });
  }
};

// Get all projects (open to all)
router.get('/', projectController.getAllProjects);

// Create a new project (admin only)
router.post('/', authMiddleware, isAdmin, projectController.createProject);

// Update a project (admin only)
router.put('/:id', authMiddleware, isAdmin, projectController.updateProject);

// Delete a project (admin only)
router.delete('/:id', authMiddleware, isAdmin, projectController.deleteProject);

module.exports = router;
