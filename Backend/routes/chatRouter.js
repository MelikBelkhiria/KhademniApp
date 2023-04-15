const express = require('express');
const chatController = require('../controllers/chatController');

const router = express.Router();

router.post('/sendMessage', chatController.sendMessage);
router.get('/history/:serviceId', chatController.getChatHistory);

module.exports = router;
