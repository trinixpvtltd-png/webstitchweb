const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article_controller');
const { authMiddleware, requireRole } = require('../middlewares/auth_middleware');

// Get all articles (open to all)
router.get('/', articleController.getAllArticles);

// Get single article by ID (open to all)
router.get('/:id', articleController.getArticleById);

// Create a new article (admin only)
router.post('/', authMiddleware, requireRole('admin'), articleController.createArticle);

// Update an article (admin only)
router.put('/:id', authMiddleware, requireRole('admin'), articleController.updateArticle);

// Delete an article (admin only)
router.delete('/:id', authMiddleware, requireRole('admin'), articleController.deleteArticle);

module.exports = router;
