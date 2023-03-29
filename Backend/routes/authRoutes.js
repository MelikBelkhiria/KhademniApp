const express = require('express');
const authController = require('../controllers/authController'); // Import the authController, adjust the path if needed

const router = express.Router();

router.post('/register', authController.registerUser);

module.exports = router;
