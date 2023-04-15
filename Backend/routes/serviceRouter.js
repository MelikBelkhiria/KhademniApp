const express = require('express');
const servicesController = require('../controllers/serviceController');
const router = express.Router();
router.get('/', servicesController.getServicesForUser);

module.exports = router;
