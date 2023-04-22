const express = require('express');
const servicesController = require('../controllers/userInfo');
const router = express.Router();
router.get('/', servicesController.getUserInfo);

module.exports = router;