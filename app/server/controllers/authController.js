// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// // ================= Register =================
// const register = async (req, res) => {
//   try {
//     const { firstName, lastName, email, password } = req.body;

//     // Check if user exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser)
//       return res.status(400).json({ message: "User already exists" });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = await User.create({
//       firstName,
//       lastName,
//       email,
//       password: hashedPassword,
//     });

//     const { password: pw, ...userData } = newUser._doc;
//     res.status(201).json(userData);
//   } catch (err) {
//     console.log("Register error:", err.message);
//     res.status(500).json({ message: err.message });
//   }
// };

// // ================= Login =================
// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) return res.status(401).json({ message: "Invalid credentials" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch)
//       return res.status(401).json({ message: "Invalid credentials" });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "1d",
//     });

//     res.cookie("token", token, {
//       httpOnly: true,
//       secure: false,
//       sameSite: "lax",
//       maxAge: 24 * 60 * 60 * 1000,
//     });

//     const { password: pw, ...userData } = user._doc;
//     res.json({ user: userData });
//   } catch (err) {
//     console.log("Login error:", err.message);
//     res.status(500).json({ message: err.message });
//   }
// };

// // ================= Get current user =================
// const getMe = async (req, res) => {
//   try {
//     const token = req.cookies.token;
//     if (!token) return res.status(401).json({ message: "Not logged in" });

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await User.findById(decoded.id).select("-password");
//     if (!user) return res.status(404).json({ message: "User not found" });

//     res.json({ user });
//   } catch (err) {
//     console.log("GetMe error:", err.message);
//     res.status(401).json({ message: "Unauthorized" });
//   }
// };

// // ================= Logout =================
// const logout = (req, res) => {
//   res.clearCookie("token");
//   res.json({ message: "Logged out successfully" });
// };

// module.exports = { register, login, getMe, logout };



// const User = require("../models/User");
// const Booking = require("../models/Booking"); // Add your Booking model
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// // ================= Register =================
// const register = async (req, res) => {
//   try {
//     const { firstName, lastName, email, password } = req.body;

//     // Check if user exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser)
//       return res.status(400).json({ message: "User already exists" });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = await User.create({
//       firstName,
//       lastName,
//       email,
//       password: hashedPassword,
//     });

//     const { password: pw, ...userData } = newUser._doc;
//     res.status(201).json(userData);
//   } catch (err) {
//     console.log("Register error:", err.message);
//     res.status(500).json({ message: err.message });
//   }
// };

// // ================= Login =================
// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) return res.status(401).json({ message: "Invalid credentials" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch)
//       return res.status(401).json({ message: "Invalid credentials" });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "1d",
//     });

//     res.cookie("token", token, {
//       httpOnly: true,
//       secure: false,
//       sameSite: "lax",
//       maxAge: 24 * 60 * 60 * 1000,
//     });

//     const { password: pw, ...userData } = user._doc;
//     res.json({ user: userData });
//   } catch (err) {
//     console.log("Login error:", err.message);
//     res.status(500).json({ message: err.message });
//   }
// };

// // ================= Get current user + bookings =================
// const getMe = async (req, res) => {
//   try {
//     const token = req.cookies.token;
//     if (!token) return res.status(401).json({ message: "Not logged in" });

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     // Fetch user info
//     const user = await User.findById(decoded.id).select("-password");
//     if (!user) return res.status(404).json({ message: "User not found" });

//     // Fetch user bookings
//     const bookings = await Booking.find({ user: decoded.id }).sort({ date: -1 });

//     res.json({ user, bookings });
//   } catch (err) {
//     console.log("GetMe error:", err.message);
//     res.status(401).json({ message: "Unauthorized" });
//   }
// };

// // ================= Logout =================
// const logout = (req, res) => {
//   res.clearCookie("token");
//   res.json({ message: "Logged out successfully" });
// };

// module.exports = { register, login, getMe, logout };






























// new wala 



// const User = require("../models/User");
// const Booking = require("../models/Booking"); // Add your Booking model
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) return res.status(401).json({ message: "Invalid credentials" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch)
//       return res.status(401).json({ message: "Invalid credentials" });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "1d",
//     });

//     // Set cookie
//     res.cookie("token", token, {
//       httpOnly: true,
//       secure: false,
//       sameSite: "lax",
//       maxAge: 24 * 60 * 60 * 1000,
//     });

//     const { password: pw, ...userData } = user._doc;

//     // ✅ Send token also in response
//     res.json({ user: userData, token });
//   } catch (err) {
//     console.log("Login error:", err.message);
//     res.status(500).json({ message: err.message });
//   }
// };


// // ================= Get current user + bookings =================
// const getMe = async (req, res) => {
//   try {
//     const token = req.cookies.token;
//     if (!token) return res.status(401).json({ message: "Not logged in" });

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     // Fetch user info
//     const user = await User.findById(decoded.id).select("-password");
//     if (!user) return res.status(404).json({ message: "User not found" });

//     // ✅ Fetch user bookings
//     const bookings = await Booking.find({ user: decoded.id }).sort({ date: -1 });

//     // Return both user and bookings
//     res.json({ user, bookings });
//   } catch (err) {
//     console.log("GetMe error:", err.message);
//     res.status(401).json({ message: "Unauthorized" });
//   }
// };

// // ================= Logout =================
// const logout = (req, res) => {
//   res.clearCookie("token");
//   res.json({ message: "Logged out successfully" });
// };

// module.exports = { register, login, getMe, logout };














// // server/controllers/authController.js
// const User = require("../models/User"); // Make sure you have a User model
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// // ==========================
// // REGISTER
// // ==========================
// const register = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     // Check if user exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: "User already exists" });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new user
//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     await newUser.save();

//     res.status(201).json({ message: "User registered successfully", user: newUser });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error" });
//   }
// };

// // ==========================
// // LOGIN
// // ==========================
// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ error: "Email and password required" });
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ error: "Invalid credentials" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ error: "Invalid credentials" });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

//     // Set cookie
//     res.cookie("token", token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 });

//     res.status(200).json({ message: "Logged in successfully", user });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error" });
//   }
// };

// // ==========================
// // GET CURRENT USER
// // ==========================
// const getMe = async (req, res) => {
//   try {
//     const token = req.cookies.token;
//     if (!token) return res.status(401).json({ error: "Not authenticated" });

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await User.findById(decoded.id).select("-password");
//     if (!user) return res.status(404).json({ error: "User not found" });

//     res.status(200).json({ user });
//   } catch (err) {
//     console.error(err);
//     res.status(401).json({ error: "Invalid token" });
//   }
// };

// // ==========================
// // LOGOUT
// // ==========================
// const logout = (req, res) => {
//   res.clearCookie("token");
//   res.status(200).json({ message: "Logged out successfully" });
// };

// // Export all functions
// module.exports = { register, login, getMe, logout };









// server/controllers/authController.js
// const User = require("../models/User"); 
// const Booking = require("../models/Booking"); // ✅ Booking model import
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// // ==========================
// // REGISTER
// // ==========================
// // const register = async (req, res) => {
// //   try {
// //     const { name, email, password } = req.body;

// //     if (!name || !email || !password) {
// //       return res.status(400).json({ error: "All fields are required" });
// //     }

// //     // Check if user exists
// //     const existingUser = await User.findOne({ email });
// //     if (existingUser) {
// //       return res.status(400).json({ error: "User already exists" });
// //     }

// //     // Hash password
// //     const hashedPassword = await bcrypt.hash(password, 10);

// //     // Create new user
// //     const newUser = new User({
// //       name,
// //       email,
// //       password: hashedPassword,
// //     });

// //     await newUser.save();

// //     res.status(201).json({ message: "User registered successfully", user: newUser });
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).json({ error: "Server error" });
// //   }
// // };

// // ==========================
// // LOGIN
// // ==========================
// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ error: "Email and password required" });
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ error: "Invalid credentials" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ error: "Invalid credentials" });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

//     // Set cookie
//     res.cookie("token", token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 });

//     res.status(200).json({ message: "Logged in successfully", user });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error" });
//   }
// };

// // ==========================
// // GET CURRENT USER + BOOKINGS
// // ==========================
// const getMe = async (req, res) => {
//   try {
//     const token = req.cookies.token;
//     if (!token) return res.status(401).json({ error: "Not authenticated" });

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await User.findById(decoded.id).select("-password");
//     if (!user) return res.status(404).json({ error: "User not found" });

//     // ✅ Get all bookings for this user
//     const bookings = await Booking.find({ user: decoded.id }).sort({ date: -1 });

//     res.status(200).json({ user, bookings }); // send both
//   } catch (err) {
//     console.error(err);
//     res.status(401).json({ error: "Invalid token" });
//   }
// };

// // ==========================
// // LOGOUT
// // ==========================
// const logout = (req, res) => {
//   res.clearCookie("token");
//   res.status(200).json({ message: "Logged out successfully" });
// };
// // ==========================
// // REGISTER
// // ==========================
// const register = async (req, res) => {
//   try {
//     const { firstName, lastName, email, password } = req.body;

//     if (!firstName || !lastName || !email || !password) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     // Check if user exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: "User already exists" });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new user
//     const newUser = new User({
//       firstName,
//       lastName,
//       email,
//       password: hashedPassword,
//     });

//     await newUser.save();

//     res
//       .status(201)
//       .json({ message: "User registered successfully", user: newUser });
//   } catch (err) {
//     console.error("❌ Register Error:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// };


// // Export all functions
// module.exports = { register, login, getMe, logout };




























// const User = require("../models/User");
// const Booking = require("../models/Booking"); 
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// // ==========================
// // REGISTER
// // ==========================
// const register = async (req, res) => {
//   try {
//     const { firstName, lastName, email, password, phone } = req.body;

//     // ✅ Validation
//     if (!firstName || !lastName || !email || !password) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     // ✅ Check if user exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: "User already exists" });
//     }

//     // ✅ Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // ✅ Create new user
//     const newUser = new User({
//       firstName,
//       lastName,
//       email,
//       phone,
//       password: hashedPassword,
//     });

//     await newUser.save();

//     res.status(201).json({ 
//       message: "User registered successfully", 
//       user: {
//         id: newUser._id,
//         firstName: newUser.firstName,
//         lastName: newUser.lastName,
//         email: newUser.email,
//         phone: newUser.phone
//       }
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error" });
//   }
// };

// // ==========================
// // LOGIN
// // ==========================
// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ error: "Email and password required" });
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ error: "Invalid credentials" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ error: "Invalid credentials" });
//     }

//     // ✅ Generate JWT token
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

//     // ✅ Set cookie
//     res.cookie("token", token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 });

//     res.status(200).json({ 
//       message: "Logged in successfully", 
//       user: {
//         id: user._id,
//         firstName: user.firstName,
//         lastName: user.lastName,
//         email: user.email,
//         phone: user.phone
//       } 
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error" });
//   }
// };

// // ==========================
// // GET CURRENT USER + BOOKINGS
// // ==========================
// const getMe = async (req, res) => {
//   try {
//     const token = req.cookies.token;
//     if (!token) return res.status(401).json({ error: "Not authenticated" });

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await User.findById(decoded.id).select("-password");
//     if (!user) return res.status(404).json({ error: "User not found" });

//     // ✅ Get all bookings for this user
//     const bookings = await Booking.find({ user: decoded.id }).sort({ date: -1 });

//     res.status(200).json({ user, bookings });
//   } catch (err) {
//     console.error(err);
//     res.status(401).json({ error: "Invalid token" });
//   }
// };

// // ==========================
// // LOGOUT
// // ==========================
// const logout = (req, res) => {
//   res.clearCookie("token");
//   res.status(200).json({ message: "Logged out successfully" });
// };

// module.exports = { register, login, getMe, logout };


















const User = require("../models/User");
const Booking = require("../models/Booking"); 
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ==========================
// REGISTER
// ==========================
const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, phone } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ 
      message: "User registered successfully", 
      user: {
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        phone: newUser.phone
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// ==========================
// LOGIN
// ==========================
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.cookie("token", token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 });

    res.status(200).json({ 
      message: "Logged in successfully", 
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone
      } 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// ==========================
// GET CURRENT USER + BOOKINGS
// ==========================
const getMe = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ error: "Not authenticated" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    if (!user) return res.status(404).json({ error: "User not found" });

    const bookings = await Booking.find({ user: decoded.id }).sort({ date: -1 });

    res.status(200).json({ user, bookings });
  } catch (err) {
    console.error(err);
    res.status(401).json({ error: "Invalid token" });
  }
};

// ==========================
// LOGOUT
// ==========================
const logout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
};

// ==========================
// CHECK AUTH (NEW ✅)
// ==========================
const checkAuth = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json({ isAuthenticated: false });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.json({ isAuthenticated: false });
    }

    res.json({ isAuthenticated: true, user });
  } catch (err) {
    console.error(err);
    res.json({ isAuthenticated: false });
  }
};

module.exports = { register, login, getMe, logout, checkAuth };
