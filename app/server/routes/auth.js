



// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");
// const { register, login } = require("../controllers/authController");

// // ===================
// // Helper Middleware
// // ===================
// const verifyUser = (req, res, next) => {
//   const token = req.cookies.token;
//   if (!token) return res.status(401).json({ message: "Not logged in" });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.userId = decoded.id;
//     next();
//   } catch (err) {
//     res.status(401).json({ message: "Invalid token" });
//   }
// };

// // ===================
// // Routes
// // ===================

// // Register
// router.post("/register", register);

// // Login
// router.post("/login", login);

// // Get current user
// router.get("/me", verifyUser, async (req, res) => {
//   try {
//     const user = await User.findById(req.userId).select("-password");
//     if (!user) return res.status(404).json({ message: "User not found" });
//     res.json(user);
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Logout
// router.post("/logout", (req, res) => {
//   res.clearCookie("token");
//   res.json({ message: "Logged out successfully" });
// });

// // Change Password
// router.post("/change-password", verifyUser, async (req, res) => {
//   const { currentPassword, newPassword } = req.body;

//   try {
//     const user = await User.findById(req.userId);
//     if (!user) return res.status(404).json({ message: "User not found" });

//     const isMatch = await bcrypt.compare(currentPassword, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Current password incorrect" });

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(newPassword, salt);

//     user.password = hashedPassword;
//     await user.save();

//     res.json({ message: "Password changed successfully" });
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;












// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");
// const Booking = require("../models/Booking"); // ✅ Added for fetching bookings
// const { register, login } = require("../controllers/authController");

// // ===================
// // Helper Middleware
// // ===================
// const verifyUser = (req, res, next) => {
//   const token = req.cookies.token; // ✅ requires cookie-parser in your main server
//   if (!token) return res.status(401).json({ message: "Not logged in" });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.userId = decoded.id;
//     next();
//   } catch (err) {
//     res.status(401).json({ message: "Invalid token" });
//   }
// };

// // ===================
// // Routes
// // ===================

// // Register
// router.post("/register", register);

// // Login
// router.post("/login", login);

// // Get current user + bookings
// router.get("/me", verifyUser, async (req, res) => {
//   try {
//     const user = await User.findById(req.userId).select("-password");
//     if (!user) return res.status(404).json({ message: "User not found" });

//     // Fetch user bookings
//     const bookings = await Booking.find({ user: req.userId }).sort({ date: -1 });

//     res.json({ user, bookings }); // ✅ return both user and bookings
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Logout
// router.post("/logout", (req, res) => {
//   res.clearCookie("token");
//   res.json({ message: "Logged out successfully" });
// });

// // Change Password
// router.post("/change-password", verifyUser, async (req, res) => {
//   const { currentPassword, newPassword } = req.body;

//   try {
//     const user = await User.findById(req.userId);
//     if (!user) return res.status(404).json({ message: "User not found" });

//     const isMatch = await bcrypt.compare(currentPassword, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Current password incorrect" });

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(newPassword, salt);

//     user.password = hashedPassword;
//     await user.save();

//     res.json({ message: "Password changed successfully" });
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;














// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");
// const Booking = require("../models/Booking"); // ✅ add Booking model
// const { register, login } = require("../controllers/authController");

// // ===================
// // Helper Middleware
// // ===================
// const verifyUser = (req, res, next) => {
//   const token = req.cookies.token;
//   if (!token) return res.status(401).json({ message: "Not logged in" });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.userId = decoded.id;
//     next();
//   } catch (err) {
//     res.status(401).json({ message: "Invalid token" });
//   }
// };

// // ===================
// // Routes
// // ===================

// // Register
// router.post("/register", register);

// // Login
// router.post("/login", login);

// // Get current user + bookings
// router.get("/me", verifyUser, async (req, res) => {
//   try {
//     const user = await User.findById(req.userId).select("-password");
//     if (!user) return res.status(404).json({ message: "User not found" });

//     // ✅ fetch logged-in user's bookings
//     const bookings = await Booking.find({ user: req.userId }).sort({ date: -1 });

//     res.json({ user, bookings }); // ✅ send both user and bookings
//   } catch (err) {
//     console.log("GetMe error:", err.message);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Logout
// router.post("/logout", (req, res) => {
//   res.clearCookie("token");
//   res.json({ message: "Logged out successfully" });
// });

// // Change Password
// router.post("/change-password", verifyUser, async (req, res) => {
//   const { currentPassword, newPassword } = req.body;

//   try {
//     const user = await User.findById(req.userId);
//     if (!user) return res.status(404).json({ message: "User not found" });

//     const isMatch = await bcrypt.compare(currentPassword, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Current password incorrect" });

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(newPassword, salt);

//     user.password = hashedPassword;
//     await user.save();

//     res.json({ message: "Password changed successfully" });
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;




















// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");
// const Booking = require("../models/Booking"); // ✅ Booking model import
// const { register, login } = require("../controllers/authController");

// // ===================
// // Helper Middleware
// // ===================
// const verifyUser = (req, res, next) => {
//   const token = req.cookies.token;
//   if (!token) return res.status(401).json({ message: "Not logged in" });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.userId = decoded.id;
//     next();
//   } catch (err) {
//     res.status(401).json({ message: "Invalid token" });
//   }
// };

// // ===================
// // Routes
// // ===================

// // Register
// router.post("/register", register);

// // Login
// router.post("/login", login);

// // ✅ Get current user + bookings for dashboard
// router.get("/me", verifyUser, async (req, res) => {
//   try {
//     const user = await User.findById(req.userId).select("-password");
//     if (!user) return res.status(404).json({ message: "User not found" });

//     // Fetch all bookings for this user
//     const bookings = await Booking.find({ user: req.userId }).sort({ date: -1 });

//     res.json({ user, bookings }); // send both user info + bookings
//   } catch (err) {
//     console.log("GetMe error:", err.message);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Logout
// router.post("/logout", (req, res) => {
//   res.clearCookie("token");
//   res.json({ message: "Logged out successfully" });
// });

// // Change Password
// router.post("/change-password", verifyUser, async (req, res) => {
//   const { currentPassword, newPassword } = req.body;

//   try {
//     const user = await User.findById(req.userId);
//     if (!user) return res.status(404).json({ message: "User not found" });

//     const isMatch = await bcrypt.compare(currentPassword, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Current password incorrect" });

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(newPassword, salt);

//     user.password = hashedPassword;
//     await user.save();

//     res.json({ message: "Password changed successfully" });
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;












// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");
// const Booking = require("../models/Booking"); // ✅ Booking model import
// const Payment = require("../models/Payment"); // ✅ Payment model import
// const { register, login } = require("../controllers/authController");

// // ===================
// // Helper Middleware
// // ===================
// const verifyUser = (req, res, next) => {
//   const token = req.cookies.token;
//   if (!token) return res.status(401).json({ message: "Not logged in" });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.userId = decoded.id;
//     next();
//   } catch (err) {
//     res.status(401).json({ message: "Invalid token" });
//   }
// };

// // ===================
// // Routes
// // ===================

// // Register
// router.post("/register", register);

// // Login
// router.post("/login", login);

// // ✅ Get current user + bookings + payments for dashboard
// router.get("/me", verifyUser, async (req, res) => {
//   try {
//     const user = await User.findById(req.userId).select("-password");
//     if (!user) return res.status(404).json({ message: "User not found" });

//     // Fetch all bookings for this user
//     const bookings = await Booking.find({ user: req.userId }).sort({ date: -1 });

//     // Fetch all payments for this user
//     const payments = await Payment.find({ bookingId: { $in: bookings.map(b => b._id) } });

//     res.json({ user, bookings, payments }); // ✅ send all together
//   } catch (err) {
//     console.log("GetMe error:", err.message);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Logout
// router.post("/logout", (req, res) => {
//   res.clearCookie("token");
//   res.json({ message: "Logged out successfully" });
// });

// // Change Password
// router.post("/change-password", verifyUser, async (req, res) => {
//   const { currentPassword, newPassword } = req.body;

//   try {
//     const user = await User.findById(req.userId);
//     if (!user) return res.status(404).json({ message: "User not found" });

//     const isMatch = await bcrypt.compare(currentPassword, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Current password incorrect" });

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(newPassword, salt);

//     user.password = hashedPassword;
//     await user.save();

//     res.json({ message: "Password changed successfully" });
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;






























const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Booking = require("../models/Booking"); // ✅ Booking model import kiya
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ======================
// Signup
// ======================
router.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ firstName, lastName, email, password: hashedPassword });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.json({ 
      token, 
      user: { id: newUser._id, firstName, lastName, email } 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Signup failed" });
  }
});

// ======================
// Login
// ======================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.json({ 
      token, 
      user: { id: user._id, firstName: user.firstName, lastName: user.lastName, email: user.email } 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Login failed" });
  }
});

// ======================
// Get current user + bookings
// ======================
router.get("/me", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // user info
    const user = await User.findById(decoded.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    // ✅ fetch all bookings of this user
    const bookings = await Booking.find({ userId: decoded.id }).sort({ createdAt: -1 });

    res.json({ user, bookings });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching user" });
  }
});

module.exports = router;









// router.get("/me", async (req, res) => {
//   try {
//     const token = req.headers.authorization?.split(" ")[1];
//     if (!token) return res.status(401).json({ message: "No token provided" });

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     const user = await User.findById(decoded.id).select("-password");
//     if (!user) return res.status(404).json({ message: "User not found" });

//     const bookings = await Booking.find({ userId: decoded.id }).sort({ createdAt: -1 });

//     res.json({ user, bookings });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Error fetching user" });
//   }
// });
