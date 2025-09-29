const express = require("express");
const router = express.Router();
const Notification = require("../models/Notification");

// GET unread notifications
router.get("/:userId/unread", async (req, res) => {
  try {
    const notifications = await Notification.find({
      userId: req.params.userId,
      read: false,
    }).sort({ createdAt: -1 });

    res.json({ unreadCount: notifications.length, notifications });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// PUT: mark all notifications as read
router.put("/:userId/mark-read", async (req, res) => {
  try {
    await Notification.updateMany(
      { userId: req.params.userId, read: false },
      { $set: { read: true } }
    );
    res.json({ message: "All notifications marked as read" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
