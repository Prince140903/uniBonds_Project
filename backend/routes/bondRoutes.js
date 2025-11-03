const express = require('express');
const router = express.Router();
const bondController = require('../controllers/bondController');
const { protect, authorize } = require('../middleware/auth');

// Public routes
// Get all bonds with optional filters
router.get('/', bondController.getAllBonds);

// Get bonds by type
router.get('/type/:type', bondController.getBondsByType);

// Get bonds by rating
router.get('/rating/:rating', bondController.getBondsByRating);

// Protected admin routes
// Create new bond
router.post('/', protect, authorize('admin'), bondController.createBond);

// Update bond by ID
router.put('/:id', protect, authorize('admin'), bondController.updateBond);

// Delete bond by ID
router.delete('/:id', protect, authorize('admin'), bondController.deleteBond);

// Get bond by ID (must be after other routes to avoid conflicts)
router.get('/:id', bondController.getBondById);

module.exports = router;
