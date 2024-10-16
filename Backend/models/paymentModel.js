const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  PaymentID: { type: String, required: true, unique: true },
  UserID: { type: Schema.Types.ObjectId, ref: "User", required: true },
  Amount: { type: Number, required: true },
  PaymentMethod: { type: String, required: true },
  PaymentStatus: { type: String, required: true },
  TransactionID: { type: String, required: true },
  CreatedAt: { type: Date, default: Date.now },
  UpdatedAt: { type: Date, default: Date.now },
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
