const express = require("express");
const router = express.Router();
const Review = require("../models/reviews");

// GET all reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new review
router.post("/", async (req, res) => {
  const { userName, email, message, rating } = req.body;
  const review = new Review({ userName, email, message, rating });

  try {
    const savedReview = await review.save();
    res.status(201).json(savedReview);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
