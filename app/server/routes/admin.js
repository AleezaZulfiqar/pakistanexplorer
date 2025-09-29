const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Booking = require("../models/Booking");

// GET all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users" });
  }
});

// GET all bookings
router.get("/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find().populate("userId", "firstName lastName email"); 
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Error fetching bookings" });
  }
});
// GET bookings by userId (for user dashboard)
router.get("/bookings/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const bookings = await Booking.find({ userId }).populate(
      "userId",
      "firstName lastName email"
    );
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Error fetching user bookings" });
  }
});


module.exports = router;
