const express = require('express');
const router = express.Router();

const ApplyForTask = require('../controllers/ApplyForTask');

router.post('/ApplyForTask/:serviceId' , ApplyForTask.ApplyForTask);

module.exports = router;