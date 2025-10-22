const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article_controller');
const authMiddleware = require('../middlewares/auth_middleware');

// Middleware to check admin role
const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Access denied. Admins only.' });
  }
};

// Get all articles (open to all)
router.get('/', articleController.getAllArticles);

// Get single article by ID (open to all)
router.get('/:id', articleController.getArticleById);

// Create a new article (admin only)
router.post('/', authMiddleware, isAdmin, articleController.createArticle);

// Update an article (admin only)
router.put('/:id', authMiddleware, isAdmin, articleController.updateArticle);

// Delete an article (admin only)
router.delete('/:id', authMiddleware, isAdmin, articleController.deleteArticle);

module.exports = router;
