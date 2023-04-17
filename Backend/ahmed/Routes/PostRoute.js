const express = require('express');
const router = express.Router();
const postService = require("../postservices")


router.post('/postService', postService.postService);

module.exports = router;