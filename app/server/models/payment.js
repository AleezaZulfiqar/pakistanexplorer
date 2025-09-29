import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  method: { type: String, required: true }, // bank, mobile, cash, card
  mobileOption: { type: String }, // jazcash / easypaisa (only for mobile payments)
  bankTransactionId: { type: String }, // only for bank payments
  mobileTransactionId: { type: String }, // only for mobile payments
  screenshotPath: { type: String }, // optional, only for mobile payments
  cardNumber: { type: String }, // only for card payments (masked)
  createdAt: { type: Date, default: Date.now },
});

const Payment = mongoose.models.Payment || mongoose.model("Payment", paymentSchema);

export default Payment;
