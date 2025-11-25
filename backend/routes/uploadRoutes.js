const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/upload_controller');
const { authMiddleware, requireRole } = require('../middlewares/auth_middleware');

// Presigned URL generation
// Allow admins to upload anywhere, maybe users for avatars later.
// For now, let's restrict to authenticated users or admins.
// Prompt says: "auth protected for admin when creating templates; optionally for users for avatars etc"
// I'll use authMiddleware.
router.post('/presign', authMiddleware, uploadController.getPresignedUrl);

// Delete file
// Admin only
router.delete('/', authMiddleware, requireRole('admin'), uploadController.deleteFile);

module.exports = router;
