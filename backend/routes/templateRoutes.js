const express = require('express');
const router = express.Router();
const templateController = require('../controllers/template_controller');
const { authMiddleware, requireRole } = require('../middlewares/auth_middleware');

// Public Routes
router.get('/', templateController.getTemplates);
router.get('/user/liked', authMiddleware, templateController.getLikedTemplates);
router.get('/:slug', templateController.getTemplateBySlug);

// Protected Routes (User)
router.post('/:id/purchase', authMiddleware, templateController.purchaseTemplate);
router.post('/:id/view', authMiddleware, templateController.incrementView);
router.post('/:id/like', authMiddleware, templateController.toggleLike);

// Admin Routes
router.get('/admin/all', authMiddleware, requireRole('admin'), templateController.getAdminTemplates);
router.post('/', authMiddleware, requireRole('admin'), templateController.createTemplate);
router.put('/:id', authMiddleware, requireRole('admin'), templateController.updateTemplate);
router.delete('/:id', authMiddleware, requireRole('admin'), templateController.deleteTemplate);

module.exports = router;
