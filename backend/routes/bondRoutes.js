const express = require('express');
const router = express.Router();
const bondController = require('../controllers/bondController');

// Get all bonds with optional filters
router.get('/', bondController.getAllBonds);

// Get bond by ID
router.get('/:id', bondController.getBondById);

// Get bonds by type
router.get('/type/:type', bondController.getBondsByType);

// Get bonds by rating
router.get('/rating/:rating', bondController.getBondsByRating);

module.exports = router;
