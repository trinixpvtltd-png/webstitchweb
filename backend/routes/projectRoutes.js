const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project_controller');
const { authMiddleware, requireRole } = require('../middlewares/auth_middleware');

// Get all projects (open to all)
router.get('/', projectController.getAllProjects);

// Create a new project (admin only)
router.post('/', authMiddleware, requireRole('admin'), projectController.createProject);

// Update a project (admin only)
router.put('/:id', authMiddleware, requireRole('admin'), projectController.updateProject);

// Delete a project (admin only)
router.delete('/:id', authMiddleware, requireRole('admin'), projectController.deleteProject);

module.exports = router;
