// const express = require("express");
// const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// require("dotenv").config();

// // Routes
// const authRoutes = require("./routes/auth");
// const bookingsRoute = require("./routes/bookings"); // fixed variable name
// const adminRoutes = require("./routes/admin");
// const payment = require("./routes/Payment");
// const reviewRoutes = require("./routes/reviews");

// const app = express();

// // ==========================
// // CORS Middleware
// // ==========================
// const allowedOrigins = ["http://localhost:3000", "http://localhost:3001"];

// app.use(cors({
//   origin: function(origin, callback) {
//     if (!origin) return callback(null, true); // Postman or curl requests
//     if (allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("CORS Error: Origin not allowed"));
//     }
//   },
//   credentials: true
// }));

// // ==========================
// // Middleware
// // ==========================
// app.use(express.json());
// app.use(cookieParser());

// // ==========================
// // Routes
// // ==========================
// app.use("/api/auth", authRoutes);
// app.use("/api/bookings", bookingsRoute); // ✅ fixed typo
// app.use("/api/admin", adminRoutes);
// app.use("/api/payments", payment);
// app.use("/api/reviews", reviewRoutes);


// // ==========================
// // MongoDB Connection
// // ==========================
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log("MongoDB connected"))
// .catch((err) => console.log("MongoDB connection error:", err));

// // ==========================
// // Start Server
// // ==========================
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));







const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

// Routes
const authRoutes = require("./routes/auth");
const bookingsRoute = require("./routes/bookings");
const adminRoutes = require("./routes/admin");
const reviewRoutes = require("./routes/reviews");
const paymentRoutes = require("./routes/payment")

const app = express();

// ==========================
// CORS Middleware
// ==========================
const allowedOrigins = ["http://localhost:3000", "http://localhost:3001"];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true); // Postman or curl requests
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS Error: Origin not allowed"));
    }
  },
  credentials: true
}));

// ==========================
// Middleware
// ==========================
app.use(express.json());
app.use(cookieParser());

// ==========================
// Routes
// ==========================
app.use("/api/auth", authRoutes);       // ✅ includes getMe with bookings
app.use("/api/bookings", bookingsRoute);
app.use("/api/admin", adminRoutes);
app.use("/api/payments", paymentRoutes); 
app.use("/api/reviews", reviewRoutes);

// ==========================
// MongoDB Connection
// ==========================
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log("MongoDB connection error:", err));

// ==========================
// Start Server
// ==========================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
