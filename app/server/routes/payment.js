// const express = require("express");
// const router = express.Router();
// const Payment = require("../models/Payment");

// // POST /api/payments
// router.post("/", async (req, res) => {
//   try {
//     const { bookingId, method, bankName, accountNumber, mobileNumber, name, phone } = req.body;

//     const newPayment = await Payment.create({
//       bookingId,
//       method,
//       bankName: bankName || null,
//       accountNumber: accountNumber || null,
//       mobileNumber: mobileNumber || null,
//       name: name || null,
//       phone: phone || null,
//       createdAt: new Date(),
//     });

//     res.status(201).json(newPayment);
//   } catch (err) {
//     console.error("Payment save error:", err);
//     res.status(500).json({ message: "Failed to save payment" });
//   }
// });

// module.exports = router;









// app/server/route/payment.js
// const fs = require("fs");
// const Payment = require("../models/Payment"); // match the model path

// module.exports = async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method not allowed" });
//   }

//   try {
//     const formData = req.body; // assuming Axios sends JSON or FormData

//     const method = formData.method; // bank, mobile, cash, card
//     let paymentData = { method };

//     // Only include relevant fields
//     if (method === "bank") {
//       paymentData.bankTransactionId = formData.bankTransactionId;
//     } else if (method === "mobile") {
//       paymentData.mobileOption = formData.mobileOption;
//       paymentData.mobileTransactionId = formData.mobileTransactionId;
//     } else if (method === "card") {
//       paymentData.cardNumber = formData.cardNumber;
//     }

//     // Handle screenshot (for mobile payments)
//     if (formData.screenshot) {
//       const buffer = Buffer.from(formData.screenshot, "base64"); // if sent as base64
//       const filePath = `public/uploads/${Date.now()}-screenshot.png`;
//       fs.writeFileSync(filePath, buffer);
//       paymentData.screenshotPath = filePath;
//     }

//     const payment = new Payment(paymentData);
//     await payment.save();

//     return res.status(200).json({ message: "Payment saved successfully" });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ message: err.message || "Error saving payment" });
//   }
// };





















// app/server/routes/payment.js
const express = require("express");
const fs = require("fs");
const Payment = require("../models/payment");

const router = express.Router();

// POST /api/payments
router.post("/", async (req, res) => {
  try {
    const formData = req.body;
    const method = formData.method;
    let paymentData = { method };

    if (method === "bank") {
      paymentData.bankTransactionId = formData.bankTransactionId;
    } else if (method === "mobile") {
      paymentData.mobileOption = formData.mobileOption;
      paymentData.mobileTransactionId = formData.mobileTransactionId;
    } else if (method === "card") {
      paymentData.cardNumber = formData.cardNumber;
    }

    if (formData.screenshot) {
      const buffer = Buffer.from(formData.screenshot, "base64");
      const filePath = `public/uploads/${Date.now()}-screenshot.png`;
      fs.writeFileSync(filePath, buffer);
      paymentData.screenshotPath = filePath;
    }

    const payment = new Payment(paymentData);
    await payment.save();

    return res.status(200).json({ message: "Payment saved successfully" });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: err.message || "Error saving payment" });
  }
});

module.exports = router;
