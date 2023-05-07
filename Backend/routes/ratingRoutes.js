const express = require("express");
const router = express.Router();
const ratingController = require("../controllers/ratingController");

router.post("/submit-rating", ratingController.submitRating);
router.get("/get-rating", ratingController.getRatings);

module.exports = router;
