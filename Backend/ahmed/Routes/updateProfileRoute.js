const express = require('express');
const router = express.Router();
const updateUserProfile = require("../updateUserProfile")


router.post('/updateUserProfile', updateUserProfile.updateUserProfile);

module.exports = router;