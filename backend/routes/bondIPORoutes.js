const express = require('express');
const {
  getBondIPOs,
  getFeaturedBondIPOs,
  getOpenBondIPOs,
  getBondIPO,
  createBondIPO,
  updateBondIPO,
  deleteBondIPO,
} = require('../controllers/bondIPOController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// Public routes
router.get('/', getBondIPOs);
router.get('/featured', getFeaturedBondIPOs);
router.get('/open', getOpenBondIPOs);
router.get('/:id', getBondIPO);

// Admin routes
router.post('/', protect, authorize('admin'), createBondIPO);
router.put('/:id', protect, authorize('admin'), updateBondIPO);
router.delete('/:id', protect, authorize('admin'), deleteBondIPO);

module.exports = router;

