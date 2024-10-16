const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usageSchema = new Schema({
  UsageID: { type: String, required: true, unique: true },
  UserID: { type: Schema.Types.ObjectId, ref: "User", required: true },
  SubscriptionID: {
    type: Schema.Types.ObjectId,
    ref: "Subscription",
    required: true,
  },
  QRCodeCount: { type: Number, required: true },
  URLCount: { type: Number, required: true },
  Month: { type: String, required: true },
  CreatedAt: { type: Date, default: Date.now },
  UpdatedAt: { type: Date, default: Date.now },
});

const Usage = mongoose.model("Usage", usageSchema);

module.exports = Usage;
