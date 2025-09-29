// const mongoose = require("mongoose");

// const bookingSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true },
//     phone: { type: String, required: true },
//     destination: { type: String, required: true },
//     travelers: { type: Number, required: true },
//     date: { type: Date, required: true },
//     notes: { type: String },
//     userId: { type: String }, // optional if linked to logged-in user
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Booking", bookingSchema);







const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    destination: { type: String, required: true },
    travelers: { type: Number, required: true },
    date: { type: Date, required: true },
    notes: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // link to logged-in user
    status: { type: String, default: "pending" } // so dashboard can show pending until admin confirms
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
