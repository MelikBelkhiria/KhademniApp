const express = require("express");
const router = express.Router();
const ratingController = require("../controllers/ratingController");

router.post("/submit-rating", ratingController.submitRating);

module.exports = router;
