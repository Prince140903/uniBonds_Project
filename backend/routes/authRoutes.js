const express = require('express');
const { body } = require('express-validator');
const {
  signup,
  login,
  getMe,
  updateProfile,
  updatePassword,
} = require('../controllers/authController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// Validation rules
const signupValidation = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
];

const loginValidation = [
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password').notEmpty().withMessage('Password is required'),
];

// Public routes
router.post('/signup', signupValidation, signup);
router.post('/login', loginValidation, login);

// Protected routes (require authentication)
router.get('/me', protect, getMe);
router.put('/updateprofile', protect, updateProfile);
router.put('/updatepassword', protect, updatePassword);

module.exports = router;

