const express = require('express');
const router = express.Router();
const notifications = require('../controllers/notifications');

router.get('/', notifications.getUserNotifications);

module.exports = router;
