const express = require('express');
const {
  getBonds,
  getFeaturedBonds,
  getBond,
  createBond,
  updateBond,
  deleteBond,
  getBondStats,
} = require('../controllers/bondController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// Public routes
router.get('/', getBonds);
router.get('/featured', getFeaturedBonds);
router.get('/stats/summary', getBondStats);
router.get('/:id', getBond);

// Admin routes
router.post('/', protect, authorize('admin'), createBond);
router.put('/:id', protect, authorize('admin'), updateBond);
router.delete('/:id', protect, authorize('admin'), deleteBond);

module.exports = router;

