// const express = require("express");
// const router = express.Router();
// const Booking = require("../models/Booking");

// // GET all bookings
// router.get("/", async (req, res) => {
//   try {
//     const bookings = await Booking.find().sort({ createdAt: -1 });
//     res.json(bookings);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // POST a new booking
// router.post("/", async (req, res) => {
//   try {
//     const newBooking = new Booking(req.body);
//     await newBooking.save();
//     res.status(201).json(newBooking);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// module.exports = router;






















const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const jwt = require("jsonwebtoken");

// Auth middleware
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

// GET all bookings (admin only, optional)
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new booking (authenticated user)
router.post("/", authMiddleware, async (req, res) => {
  try {
    const newBooking = new Booking({
      ...req.body,
      userId: req.userId, // link booking to logged-in user
      status: "pending",  // default pending
    });
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET bookings for logged-in user (dashboard)
router.get("/my-bookings", authMiddleware, async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.userId }).sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
