const express = require('express');
const router = express.Router();
const applicationsController = require('../controllers/ApplyForTask');

router.get('/myTasks', applicationsController.displayTasks);

module.exports = router;
