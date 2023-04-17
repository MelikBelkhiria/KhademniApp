const express = require('express');
const router = express.Router();

const SearchTasks = require('../controllers/SearchTasks');

router.get('/SearchTasks', SearchTasks.displayTasks);

module.exports = router;